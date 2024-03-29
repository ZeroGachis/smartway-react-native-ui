import React from 'react';
import { DateSelector } from '../../components';
import { DeviceEventEmitter } from 'react-native';
import { render, userEvent, screen, act } from '../../shared/testUtils';

const mockedTestID = 'mockedTestID';
let mockOnChange: jest.Mock<unknown, unknown[], unknown>;

describe('MODULE | DateSelector', () => {
    beforeEach(() => {
        mockOnChange = jest.fn();
        render(
            <DateSelector
                prefilled={new Date(2003, 1, 1)}
                onUpdatedDate={mockOnChange}
                testID={mockedTestID}
            />,
        );
    });
    it('component renders correctly with prefilled values in DD/MM/YY', () => {
        expect(screen.toJSON()).toMatchSnapshot();
    });

    it('should send date filled with missing fields', async () => {
        const user = userEvent.setup();

        const yearField = screen.getByTestId(mockedTestID + '/year');
        await user.type(yearField, '24');

        await act(() => {
            DeviceEventEmitter.emit('keyboardDidHide', {});
        });

        expect(mockOnChange).toHaveBeenCalledWith(new Date(2024, 1, 1));
    });

    it('should send date filled with all changed fields', async () => {
        const user = userEvent.setup();

        const dayField = screen.getByTestId(mockedTestID + '/day');
        const monthField = screen.getByTestId(mockedTestID + '/month');
        const yearField = screen.getByTestId(mockedTestID + '/year');

        await user.type(dayField, '12');
        await user.type(monthField, '06');
        await user.type(yearField, '24');

        await act(() => {
            DeviceEventEmitter.emit('keyboardDidHide', {});
        });

        expect(mockOnChange).toHaveBeenCalledWith(new Date(2024, 5, 12));
    });

    it('should prefix date fields with a 0 on blur', async () => {
        const user = userEvent.setup();

        const dayField = screen.getByTestId(mockedTestID + '/day');
        await user.type(dayField, '4');
        expect(dayField.props.value).toBe('04');

        const monthField = screen.getByTestId(mockedTestID + '/month');
        await user.type(monthField, '5');
        expect(monthField.props.value).toBe('05');

        const yearField = screen.getByTestId(mockedTestID + '/year');
        await user.type(yearField, '6');
        expect(yearField.props.value).toBe('06');
    });

    it('should not cast invalid date into a valid one', async () => {
        const user = userEvent.setup();

        const dayField = screen.getByTestId(mockedTestID + '/day');
        await user.type(dayField, '33');

        const monthField = screen.getByTestId(mockedTestID + '/month');
        await user.type(monthField, '5');

        const yearField = screen.getByTestId(mockedTestID + '/year');
        await user.type(yearField, '6');

        await act(() => {
            DeviceEventEmitter.emit('keyboardDidHide', {});
        });

        expect(mockOnChange).toHaveBeenCalledWith(expect.any(RangeError));
    });
});
describe('MODULE | DateSelector error', () => {
    const errorMessage = 'an error';
    it('should display an error message if not focused', async () => {
        mockOnChange = jest.fn();
        render(
            <DateSelector
                prefilled={new Date(2003, 1, 1)}
                onUpdatedDate={mockOnChange}
                testID={mockedTestID}
                errorMessage={errorMessage}
            />,
        );

        expect(screen.getByText(errorMessage)).toBeOnTheScreen();
    });

    it('should not display an error message if a field is focused', async () => {
        mockOnChange = jest.fn();
        render(
            <DateSelector
                prefilled={new Date(2003, 1, 1)}
                onUpdatedDate={mockOnChange}
                testID={mockedTestID}
                errorMessage={errorMessage}
            />,
        );

        const user = userEvent.setup();

        expect(screen.getByText(errorMessage)).toBeOnTheScreen();

        const dayField = screen.getByTestId(mockedTestID + '/day');
        await user.type(dayField, '4');

        expect(screen.queryByText(errorMessage)).not.toBeOnTheScreen();
    });
});
