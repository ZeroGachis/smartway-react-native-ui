import React from 'react';
import { act, fireEvent, render } from '../../shared/testUtils';
import { ActionCard } from '../../components';
import { Text, View } from 'react-native';

const mockedCallback = jest.fn();
const mockedTestID = 'mockedTestID';
describe('MODULE | ActionCard', () => {
    it('component renders correctly', () => {
        const tree = render(
            <ActionCard
                titleColor={'black'}
                bottomChildren={
                    <View>
                        <Text>Test</Text>
                    </View>
                }
            >
                {'Test children'}
            </ActionCard>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('component renders correctly in disabled state', () => {
        const tree = render(
            <ActionCard
                disabled
                titleColor={'black'}
                bottomChildren={
                    <View>
                        <Text>Test</Text>
                    </View>
                }
            >
                {'Test children'}
            </ActionCard>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('fires callback on button press', async () => {
        const tree = render(
            <ActionCard
                onClear={mockedCallback}
                displayClear={true}
                titleColor={'black'}
                bottomChildren={
                    <View>
                        <Text>Test</Text>
                    </View>
                }
                buttonTestID={mockedTestID}
            >
                {'Test children'}
            </ActionCard>,
        );

        await act(async () => {
            return fireEvent.press(tree.getByTestId(mockedTestID));
        }),
            expect(mockedCallback).toHaveBeenCalled();
    });
});
