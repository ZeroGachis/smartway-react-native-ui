import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberField } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof NumberField>;

export default {
    title: 'components/NumberField',
    component: NumberField,
    args: {
        value: '0',
        minValue: 0,
        maxValue: 10,
    },
    argTypes: {
        state: {
            control: { type: 'radio' },
            options: [
                'readonly',
                'filled',
                'prefilled',
                'filled-focused',
                'prefilled-focused',
                'error',
            ],
        },
        size: { control: { type: 'radio' }, options: ['m', 's'] },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { paddingTop: 16 },
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
    args: {},
};
Default.parameters = { noSafeArea: false };
