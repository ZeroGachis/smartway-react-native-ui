import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberSelector } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof NumberSelector>;

export default {
    title: 'components/NumberSelector',
    component: NumberSelector,
    args: {
        value: 0,
        minValue: -999,
        maxValue: 999,
    },
    argTypes: {
        onValueChange: { action: 'onValueChange' },
        decimal: { control: { type: 'radio' }, options: [true, false] },
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

const NumberSelectorTester = (args) => {
    const [quantity, setQuantity] = useState<number>(args.value);
    const onValueChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };
    return (
        <NumberSelector
            showSoftInputOnFocus={args.showSoftInputOnFocus}
            decimal={args.decimal}
            size={args.size}
            minValue={args.minValue}
            maxValue={args.maxValue}
            minusIcon={args.minusIcon}
            plusIcon={args.plusIcon}
            value={quantity}
            onValueChange={onValueChange}
        />
    );
};

export const Default: Story = {
    render: (args) => {
        return NumberSelectorTester(args);
    },
};

export const undefinedValue: Story = {
    render: (args) => {
        args.value = undefined;
        return NumberSelectorTester(args);
    },
};

Default.parameters = { noSafeArea: false };
