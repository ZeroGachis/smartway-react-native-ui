import React from 'react';
import { render, act, userEvent } from '@testing-library/react-native';
import { ThemeProvider } from '../../styles/themes';
import { DateSelector } from '../../components';
import { DeviceEventEmitter } from 'react-native';

const mockedCallback = jest.fn();
const mockedTestID = 'mockedTestID';

describe('MODULE | DateField', () => {
    it('component renders correctly with prefilled values in DD/MM/YY', () => {
        const tree = render(
            <ThemeProvider>
                <DateSelector
                    prefilled={new Date(2003, 1, 1)}
                    onChange={mockedCallback}
                />
            </ThemeProvider>,
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should send date filled with missing fields', async () => {
        const mock = jest.fn();
        const { getByTestId } = render(
            <ThemeProvider>
                <DateSelector
                    prefilled={new Date(2003, 1, 1)}
                    onChange={mock}
                    testID={mockedTestID}
                />
            </ThemeProvider>,
        );

        const user = userEvent.setup();

        const yearField = getByTestId(mockedTestID + '/third');
        await user.type(yearField, '24');

        await act(() => {
            DeviceEventEmitter.emit('keyboardDidHide', {});
        });

        expect(mock).toHaveBeenCalledWith(new Date(2024, 1, 1));
    });

    it('should send date filled with all changed fields', async () => {
        const mock = jest.fn();
        const { getByTestId } = render(
            <ThemeProvider>
                <DateSelector
                    prefilled={new Date(2003, 1, 1)}
                    onChange={mock}
                    testID={mockedTestID}
                />
            </ThemeProvider>,
        );

        const user = userEvent.setup();

        const dayField = getByTestId(mockedTestID + '/first');
        const monthField = getByTestId(mockedTestID + '/second');
        const yearField = getByTestId(mockedTestID + '/third');

        await user.type(dayField, '12');
        await user.type(monthField, '06');
        await user.type(yearField, '24');

        await act(() => {
            DeviceEventEmitter.emit('keyboardDidHide', {});
        });

        expect(mock).toHaveBeenCalledWith(new Date(2024, 5, 12));
    });
});
