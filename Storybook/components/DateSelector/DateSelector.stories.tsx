import React from 'react';
import { DateSelector } from '../../../src';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { View } from 'react-native';

export default {
    title: 'components/DateSelector',
    component: DateSelector,
    argTypes: {
        prefilled: { control: { type: 'date' } },
        errorMessage: { control: { type: 'text' } },
    },
    args: {
        prefilled: new Date(2023, 0, 8),
        onUpdatedDate: (date: Date) => {
            action('onChange')(date.toDateString());
        },
        errorMessage: undefined,
    },
    decorators: [
        (Story) => {
            return (
                <View style={{ paddingTop: 16 }}>
                    <Story />
                </View>
            );
        },
    ],
} as ComponentMeta<typeof DateSelector>;

export const Base: ComponentStory<typeof DateSelector> = (args) => {
    return <DateSelector {...args} />;
};
