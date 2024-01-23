import React from 'react';
import { render, act, userEvent, screen } from '@testing-library/react-native';
import { ThemeProvider } from '../../styles/themes';
import { DateSelector } from '../../components';
import { DeviceEventEmitter } from 'react-native';

const mockedTestID = 'mockedTestID';
const mockOnChange = jest.fn();
let tree: ReturnType<typeof render>;

beforeEach(() => {
    tree = render(
        <ThemeProvider>
            <DateSelector
                prefilled={new Date(2003, 1, 1)}
                onChange={mockOnChange}
                testID={mockedTestID}
            />
        </ThemeProvider>,
    );
});

describe('MODULE | DateField', () => {
    it('component renders correctly with prefilled values in DD/MM/YY', () => {
        expect(tree.toJSON()).toMatchSnapshot();
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

    it('should display an error message', async () => {
        tree.rerender(
            <ThemeProvider>
                <DateSelector
                    prefilled={new Date(2003, 1, 1)}
                    onChange={mockOnChange}
                    testID={mockedTestID}
                    errorMessage='an error'
                />
            </ThemeProvider>,
        );

        expect(screen.getByText('an error')).toBeOnTheScreen();
    });
});
