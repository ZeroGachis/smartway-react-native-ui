import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Banner from '../../../src/components/alert/Banner';

type ComponentProps = React.ComponentProps<typeof Banner>;

export default {
    title: 'components/Banner',
    component: Banner,
    argTypes: {
        onDismiss: { action: 'onDismiss' },
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
    },
    render(args) {
        return (
            <View style={{ gap: 8 }}>
                <Banner {...args} status='information' />
                <Banner {...args} status='success' />
                <Banner {...args} status='warning' />
                <Banner {...args} status='error' />
            </View>
        );
    },
};
