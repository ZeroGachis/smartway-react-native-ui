import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '../../styles/themes';
import { ActionCard } from '../../components';
import { Text, View } from 'react-native';

const mockedCallback = jest.fn();
const mockedTestID = 'mockedTestID';
describe('MODULE | ActionCard', () => {
    it('component renders correctly', () => {
        const tree = render(
            <ThemeProvider>
                <ActionCard
                    titleColor={'black'}
                    bottomChildren={
                        <View>
                            <Text>Test</Text>
                        </View>
                    }
                />
            </ThemeProvider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('component renders correctly in disabled state', () => {
        const tree = render(
            <ThemeProvider>
                <ActionCard
                    disabled
                    titleColor={'black'}
                    bottomChildren={
                        <View>
                            <Text>Test</Text>
                        </View>
                    }
                />
            </ThemeProvider>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('fires callback on button press', async () => {
        const tree = render(
            <ThemeProvider>
                <ActionCard
                    onClose={mockedCallback}
                    titleColor={'black'}
                    bottomChildren={
                        <View>
                            <Text>Test</Text>
                        </View>
                    }
                    buttonTestID={mockedTestID}
                />
            </ThemeProvider>,
        );

        await act(async () => {
            return fireEvent.press(tree.getByTestId(mockedTestID));
        }),
            expect(mockedCallback).toHaveBeenCalled();
    });
});
