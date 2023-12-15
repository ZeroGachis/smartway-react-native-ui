import React from 'react';
import {
    fireEvent,
    render,
    screen,
    userEvent,
} from '@testing-library/react-native';

import { ThemeProvider } from '../../styles/themes';
import { DateSelector } from '../../components';

type ReactTestInstance = ReturnType<typeof screen.getByDisplayValue>;

/**
 *
 *  To clear a text input, `await user.clear()` is the recommanded way but in some case,
 *  the sequence of events triggered don't match our requirement.
 *  Date selector don't blur the text input after clearing it but `await user.clear()`
 *  force this beahviour and causes false-positives when test are played.
 *
 *  `clearWithoutLeavingTextInput` simply replace the content of text input without triggering
 *  leaving events (end editing and blur).
 *
 *  More info on user.clear() here: https://callstack.github.io/react-native-testing-library/docs/user-event#clear
 */
const clearWithoutLeavingTextInput = (
    textInputTestInstance: ReactTestInstance,
) => fireEvent.changeText(textInputTestInstance, '');

describe('Date Selector', () => {
    describe('Given an `initialDate`', () => {
        const component = (
            <ThemeProvider>
                <DateSelector initialDate={new Date(2023, 0, 8)} />
            </ThemeProvider>
        );

        it('should be possible to entred valid day, month and year', async () => {
            render(component);

            const user = userEvent.setup();

            const inputDay = screen.getByTestId('day');
            const inputMonth = screen.getByTestId('month');
            const inputYear = screen.getByTestId('year');

            clearWithoutLeavingTextInput(inputDay);
            await user.type(inputDay, '09');
            expect(inputDay.props.value).toEqual('09');

            clearWithoutLeavingTextInput(inputMonth);
            await user.type(inputMonth, '11');
            expect(inputMonth.props.value).toEqual('11');

            clearWithoutLeavingTextInput(inputYear);
            await user.type(inputYear, '24');
            expect(inputYear.props.value).toEqual('24');
        });

        it('should applied a padding 0 from the start on submit edit', async () => {
            render(component);

            const user = userEvent.setup();

            const inputDay = screen.getByTestId('day');
            const inputMonth = screen.getByTestId('month');
            const inputYear = screen.getByTestId('year');

            clearWithoutLeavingTextInput(inputDay);
            await user.type(inputDay, '9', { submitEditing: true });
            expect(inputDay.props.value).toEqual('09');

            clearWithoutLeavingTextInput(inputMonth);
            await user.type(inputMonth, '2', { submitEditing: true });
            expect(inputMonth.props.value).toEqual('02');

            clearWithoutLeavingTextInput(inputYear);
            await user.type(inputYear, '3', { submitEditing: true });
            expect(inputYear.props.value).toEqual('03');
        });

        it('should fallback on initial day, month and year after clearing text input', async () => {
            render(component);

            const user = userEvent.setup();

            const inputDay = screen.getByTestId('day');
            const inputMonth = screen.getByTestId('month');
            const inputYear = screen.getByTestId('year');

            await user.clear(inputDay);
            expect(inputDay.props.value).toEqual('08');

            await user.clear(inputMonth);
            expect(inputMonth.props.value).toEqual('01');

            await user.clear(inputYear);
            expect(inputYear.props.value).toEqual('23');
        });
    });
});
