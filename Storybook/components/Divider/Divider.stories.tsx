import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Divider } from 'smartway-react-native-ui';

type DividerPropsAndCustomArgs = React.ComponentProps<typeof Divider> & {
    marginTopOrLeft?: number;
    marginBottomOrRight?: number;
};

const textInside = `
Lorem ipsum dolor sit amet,
consectetur adipisicing elit.
`;

export default {
    title: 'components/Divider',
    component: Divider,
    args: {
        orientation: 'horizontal',
        dashed: false,
        marginBottomOrRight: 10,
        marginTopOrLeft: 10,
    },
    argTypes: {
        orientation: {
            control: { type: 'radio' },
            options: ['vertical', 'horizontal'],
        },
        dashed: { type: 'boolean' },
        marginTopOrLeft: {
            step: 1,
            min: 0,
            max: 100,
            range: true,
        },
        marginBottomOrRight: {
            step: 1,
            min: 0,
            max: 100,
            range: true,
        },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as Meta<DividerPropsAndCustomArgs>;

type Story = StoryObj<DividerPropsAndCustomArgs>;

export const Default: Story = {
    render: (args) => {
        const { orientation, dashed, marginTopOrLeft, marginBottomOrRight } = args;
        const styles = StyleSheet.create({
            contentContainer: {
                flex: 1,
                marginTop: 10,
                flexDirection: orientation == 'horizontal' ? 'column' : 'row',
            },
            itemLine: {
                backgroundColor: 'steelblue',
                height: orientation == 'horizontal' ? 50 : 'auto',
                width: orientation == 'vertical' ? 50 : 'auto',
            },
        });

        return (
            <View style={styles.contentContainer}>
                {[...Array(4)].map(() => (
                    <View
                        key={Math.random()}
                        style={{
                            flexDirection: orientation == 'horizontal' ? 'column' : 'row',
                        }}
                    >
                        <Body>{textInside}</Body>
                        <Divider
                            style={{
                                paddingTop: orientation == 'horizontal' ? marginTopOrLeft : 0,
                                paddingBottom:
                                    orientation == 'horizontal' ? marginBottomOrRight : 0,
                                paddingLeft: orientation == 'vertical' ? marginTopOrLeft : 0,
                                paddingRight: orientation == 'vertical' ? marginBottomOrRight : 0,
                            }}
                            dashed={dashed}
                            orientation={orientation}
                        />
                    </View>
                ))}
            </View>
        );
    },
};
Default.parameters = { noSafeArea: false };
