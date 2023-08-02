import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import { ThemeProvider } from '../../styles/themes';
import { TextField } from '../../components';

const mockedCallback = jest.fn();
const mockedTestID = 'mockedTestID';

describe('MODULE | TextField', () => {
    it('component renders correctly', () => {
        const tree = render(
            <ThemeProvider>
                <TextField textType="information" value="" />
            </ThemeProvider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('component renders correctly with bottom text', () => {
        const tree = render(
            <ThemeProvider>
                <TextField textType="information" value="" text="test" />
            </ThemeProvider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('component renders correctly when textType in error state', () => {
        const tree = render(
            <ThemeProvider>
                <TextField textType="error" value="" />
            </ThemeProvider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('fires callback when on input value change', async () => {
        const tree = render(
            <ThemeProvider>
                <TextField
                    testID={mockedTestID}
                    textType="information"
                    value=""
                    onChangeText={mockedCallback}
                />
            </ThemeProvider>,
        );

        await act(async () => {
            fireEvent.changeText(tree.getByTestId(mockedTestID), '12345');
        });

        expect(mockedCallback).toHaveBeenCalledWith('12345');
    });
});
