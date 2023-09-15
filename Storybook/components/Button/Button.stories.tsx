import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from 'smartway-react-native-ui';

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['filled', 'outlined', 'text'],
        },
        size: {
            control: { type: 'radio' },
            options: ['s', 'm', null],
        },
        status: {
            control: { type: 'radio' },
            options: ['primary', 'default', null],
        },
        onPress: { action: 'clicked' },
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
    parameters: {
        notes: `
# Button

This is a paragraph that can span multiple lines. It should be line-wrapped
but not contain any paragraph breaks.

Unless a paragraph break is explicitly used.

Inline content can be **strong**, _emphasized_, ~~struck out~~, \`code\`, or a [hyperlink](http://example.com).

`,
    },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
    },
};
Default.parameters = { noSafeArea: false };
