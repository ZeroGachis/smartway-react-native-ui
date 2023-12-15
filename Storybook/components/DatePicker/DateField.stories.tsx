import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { DateField } from '../../../src';
import { DateFieldProps } from '../../../src/components/datePicker/DateField';

export default {
    title: 'components/DateField',
    component: DateField,
    argTypes: {
        placeholder: { control: { type: 'text' }, defaultValue: '01' },
        hasError: { control: { type: 'boolean' }, defaultValue: false },
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
} as ComponentMeta<typeof DateField>;

export const Default = (args: DateFieldProps) => {
    const [value, setValue] = useState('');
    return <DateField value={value} {...args} onChangeText={setValue} />;
};
