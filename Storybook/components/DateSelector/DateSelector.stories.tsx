import React from 'react';
import { DateSelector } from '../../../src/components/dateSelector/DateSelector';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { StyleSheet, View } from 'react-native';

export default {
    title: 'components/DateSelector',
    component: DateSelector,
    argTypes: {
        prefilled: { control: { type: 'date' } },
    },
    args: {
        prefilled: new Date(2023, 0, 8),
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
} as ComponentMeta<typeof DateSelector>;

export const Base: ComponentStory<typeof DateSelector> = (args) => (
    <DateSelector {...args} />
);
