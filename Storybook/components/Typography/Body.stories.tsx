import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Body } from 'smartway-react-native-ui';

const textInside = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quisquam, nulla
earum ut porro distinctio autem deleniti laborum nisi ex ipsum nihil beatae
facilis. Vel unde molestias quibusdam dolorem libero.
`;

export default {
    title: 'typography/Body',
    component: Body,
    argTypes: {
        token: {
            control: { type: 'radio' },
            options: ['n1', 'n2', 'n3', 'n4'],
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
} as Meta<typeof Body>;

type Story = StoryObj<typeof Body>;

export const Default: Story = {
    args: {
        children: textInside,
    },
};
Default.parameters = { noSafeArea: false };
