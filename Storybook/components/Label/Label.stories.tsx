import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Label } from 'smartway-react-native-ui';

type LabelProps = React.ComponentProps<typeof Label>;

export default {
    title: 'components/Label',
    component: Label,
    args: {
        type: 'soft',
    },
    argTypes: {
        labelColor: {
            control: { type: 'radio' },
            options: [
                'error',
                'warning',
                'success',
                'information',
                'secondary',
                'primary',
                'neutral',
            ],
        },
        type: {
            control: { type: 'radio' },
            options: ['outlined', 'filled', 'soft'],
        },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { paddingTop: 16, alignItems: 'center' },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as Meta<LabelProps>;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
    args: {
        text: 'text',
    },
};
Default.parameters = { noSafeArea: false };
