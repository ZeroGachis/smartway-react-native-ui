import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Headline } from 'smartway-react-native-ui';

export default {
    title: 'typography/Headline',
    component: Headline,
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['h1', 'h2', 'h3', 'h4'],
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
} as Meta<typeof Headline>;

type Story = StoryObj<typeof Headline>;

export const Default: Story = {
    args: {
        children: `This is a Headline`,
    },
};
Default.parameters = { noSafeArea: false };
