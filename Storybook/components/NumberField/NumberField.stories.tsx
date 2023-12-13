import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { NumberField } from '../../../src';
import { NumberFieldProps } from '../../../src/components/numberField/NumberField';

export default {
    title: 'components/NumberField',
    component: NumberField,
    argTypes: {
        minValue: { control: { type: 'number' } },
        maxValue: { control: { type: 'number' } },
        size: { control: { type: 'radio' }, options: ['s', 'm', 'l'] },
        decimal: { control: { type: 'boolean' } },
    },
    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as ComponentMeta<typeof NumberField>;

export const Default = (args: NumberFieldProps) => {
    return <NumberField value={"1"} {...args} />;
};
