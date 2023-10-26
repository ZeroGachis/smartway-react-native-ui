import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberField } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof NumberField>;

export default {
    title: 'components/NumberField',
    component: NumberField,
    args: {
        value: '-999.9',
        minValue: -999.9,
        maxValue: 999.9,
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
        decimal: { control: { type: 'radio' }, options: [true, false] },
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

const NumberFieldTester = (args) => {
    const [quantity, setQuantity] = useState<number>(args.value);
    const onValueChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };
    return (
        <NumberField
            minValue={args.minValue}
            maxValue={args.maxValue}
            size={args.size}
            decimal={args.decimal}
            value={quantity}
            onValueChange={onValueChange}
        />
    );
};
export const Default: Story = {
    render: (args) => {
        return NumberFieldTester(args);
    },
};
Default.parameters = { noSafeArea: false };
