import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import { ThemeProvider } from '../../styles/themes';
import { DateField } from '../../components';

const mockedCallback = jest.fn();
const mockedTestID = 'mockedTestID';

describe('MODULE | DateField', () => {
    it('component renders correctly in empty mode', () => {
        const tree = render(
            <ThemeProvider>
                <DateField placeholder='01' />
            </ThemeProvider>,
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('component renders correctly empty focused state', async () => {
        const tree = render(
            <ThemeProvider>
                <DateField testID={mockedTestID} placeholder='01' />
            </ThemeProvider>,
        );

        await act(async () => {
            fireEvent(tree.getByTestId(mockedTestID), 'focus');
        });

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('component renders correctly filled focused state', async () => {
        const tree = render(
            <ThemeProvider>
                <DateField testID={mockedTestID} placeholder='01' value='12' />
            </ThemeProvider>,
        );

        await act(async () => {
            fireEvent(tree.getByTestId(mockedTestID), 'focus');
        });

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('component renders correctly filled unfocused state', async () => {
        const tree = render(
            <ThemeProvider>
                <DateField testID={mockedTestID} placeholder='01' value='12' />
            </ThemeProvider>,
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('component renders correctly in error state', async () => {
        const tree = render(
            <ThemeProvider>
                <DateField placeholder='01' hasError={true} />
            </ThemeProvider>,
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('fires callback when on input value change', async () => {
        const tree = render(
            <ThemeProvider>
                <DateField
                    testID={mockedTestID}
                    onChangeText={mockedCallback}
                />
            </ThemeProvider>,
        );

        await act(async () => {
            fireEvent.changeText(tree.getByTestId(mockedTestID), '12');
        });

        expect(mockedCallback).toHaveBeenCalledWith('12');
    });

    it('shouldnt send more than 2 characters', async () => {
        const tree = render(
            <ThemeProvider>
                <DateField
                    testID={mockedTestID}
                    onChangeText={mockedCallback}
                />
            </ThemeProvider>,
        );

        await act(async () => {
            fireEvent.changeText(tree.getByTestId(mockedTestID), '1234');
        });

        expect(mockedCallback).toHaveBeenCalledWith('12');
    });

    it('shouldnt accept non number characters', async () => {
        const tree = render(
            <ThemeProvider>
                <DateField
                    testID={mockedTestID}
                    onChangeText={mockedCallback}
                />
            </ThemeProvider>,
        );

        await act(async () => {
            fireEvent.changeText(tree.getByTestId(mockedTestID), '1.');
        });

        expect(mockedCallback).toHaveBeenCalledWith('1');
    });
});
