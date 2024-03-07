import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Snackbar from '../../../src/components/alert/Snackbar';

type ComponentProps = React.ComponentProps<typeof Snackbar>;

export default {
    title: 'components/Snackbar',
    component: Snackbar,
    argTypes: {
        onDismiss: { action: 'onDismiss' },
        duration: { type: 'number' },
        status: {
            control: { type: 'select' },
            options: ['information', 'success', 'error', 'warning'],
        },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { flex: 1 },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as Meta<ComponentProps>;

type Story = StoryObj<ComponentProps>;

export const Default: Story = {
    args: {
        title: 'This is a title',
        description: 'This is a description',
        visible: true,
        status: 'warning',
    },
};
