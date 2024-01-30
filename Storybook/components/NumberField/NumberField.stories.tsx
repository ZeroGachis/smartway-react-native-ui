import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberField, NumberValidator } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof NumberField>;

export default {
    title: 'components/NumberField',
    component: NumberField,
    args: {
        value: '-999.9',
        minValue: -999.9,
        maxValue: 999.9,
        decimal: 'true',
        blockOutrange: 'true',
        size: 'm',
        focused: 'false',
        error: 'false',
        fieldState: 'filledWithDefault',
    },
    argTypes: {
        fieldState: {
            control: { type: 'radio' },
            options: ['filled', 'filledWithDefault'],
        },
        size: { control: { type: 'radio' }, options: ['m', 's'] },
        error: {
            control: { type: 'radio' },
            options: ['true', 'false'],
            mapping: { true: true, false: false },
        },
        focused: {
            control: { type: 'radio' },
            options: ['true', 'false'],
            mapping: { true: true, false: false },
        },
        decimal: {
            control: { type: 'radio' },
            options: ['true', 'false'],
            mapping: { true: true, false: false },
        },
        blockOutrange: {
            control: { type: 'radio' },
            options: ['true', 'false'],
            mapping: { true: true, false: false },
            table: { defaultValue: { summary: 'true' } },
        },
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
    const [quantity, setQuantity] = useState<number>(args.value.toString());
    const onValueChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };
    const validator = new NumberValidator(
        args.minValue,
        args.maxValue,
        args.decimal,
        args.blockOutrange
    );
    return (
        <NumberField
            validator={validator}
            size={args.size}
            focused={args.focused}
            error={args.error}
            fieldState={args.fieldState}
            value={quantity}
            onChangeText={onValueChange}
        />
    );
};
export const Default: Story = {
    render: (args) => {
        return NumberFieldTester(args);
    },
};
Default.parameters = { noSafeArea: false };
