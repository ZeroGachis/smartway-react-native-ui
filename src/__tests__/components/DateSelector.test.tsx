import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import { ThemeProvider } from '../../styles/themes';
import { DateSelector } from '../../components';

const mockedCallback = jest.fn();
const mockedTestID = 'mockedTestID';

describe('MODULE | DateField', () => {
    it('component renders correctly with prefilled values in DD/MM/YY', () => {
        const tree = render(
            <ThemeProvider>
                <DateSelector prefilled={new Date(2003, 1, 1)} />
            </ThemeProvider>,
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('fires callback with correctly formatted date', async () => {
        const tree = render(
            <ThemeProvider>
                <DateSelector
                    prefilled={new Date(2003, 1, 1)}
                    onChange={mockedCallback}
                    testID={mockedTestID}
                />
            </ThemeProvider>,
        );

        await act(async () => {
            fireEvent.changeText(
                tree.getByTestId(mockedTestID + '/first'),
                '12',
            );
        });

        await act(async () => {
            fireEvent(tree.getByTestId(mockedTestID + '/first'), 'blur');
        });

        expect(mockedCallback).toHaveBeenCalledWith(new Date(2003, 1, 12));
    });
});
