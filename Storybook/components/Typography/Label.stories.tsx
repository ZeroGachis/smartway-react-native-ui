import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Label } from 'smartway-react-native-ui';

const textInside = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quisquam, nulla
earum ut porro distinctio autem deleniti laborum nisi ex ipsum nihil beatae
facilis. Vel unde molestias quibusdam dolorem libero.
`;

export default {
    title: 'typography/Label',
    component: Label,
    argTypes: {
        token: {
            control: { type: 'radio' },
            options: ['n1', 'n2'],
        },
    },
    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        children: textInside,
    },
};
Default.parameters = { noSafeArea: false };
