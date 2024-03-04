import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberSelector, NumberValidator } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof NumberSelector>;

export default {
    title: 'components/NumberSelector',
    component: NumberSelector,
    args: {
        value: 0,
        minValue: 0,
        maxValue: 999,
        decimal: 'true',
        blockOutrange: 'true',
        size: 's',
        showSoftInputOnFocus: 'false',
    },
    argTypes: {
        onValueChange: { action: 'onValueChange' },
        decimal: {
            control: { type: 'radio' },
            options: ['true', 'false'],
            mapping: { true: true, false: false },
            table: { defaultValue: { summary: 'true' } },
        },
        blockOutrange: {
            control: { type: 'radio' },
            options: ['true', 'false'],
            mapping: { true: true, false: false },
            table: { defaultValue: { summary: 'true' } },
        },
        showSoftInputOnFocus: {
            control: { type: 'radio' },
            options: ['true', 'false'],
            mapping: { true: true, false: false },
            table: { defaultValue: { summary: 'true' } },
        },
        size: { control: { type: 'radio' }, options: ['m', 's'] },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { paddingTop: 16, width: 140 },
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
    const [quantity, setQuantity] = useState<number | undefined>(args.value);
    const onEndEditing = (newQuantity: number) => {
        setQuantity(newQuantity);
    };
    return (
        <NumberSelector
            showSoftInputOnFocus={args.showSoftInputOnFocus}
            validator={
                new NumberValidator(
                    args.minValue,
                    args.maxValue,
                    args.decimal,
                    args.blockOutrange
                )
            }
            initialValue={args.value}
            size={args.size}
            minusIcon={args.minusIcon}
            plusIcon={args.plusIcon}
            value={quantity}
            onEndEditing={onEndEditing}
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
