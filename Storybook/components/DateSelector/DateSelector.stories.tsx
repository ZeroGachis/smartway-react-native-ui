import React, { useState } from 'react';
import { DateSelector } from '../../../src/components/dateSelector/DateSelector';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { StyleSheet, View, Text } from 'react-native';

export default {
    title: 'components/DateSelector',
    component: DateSelector,
    argTypes: {
        prefilled: { control: { type: 'date' } },
    },
    args: {
        prefilled: new Date(2023, 0, 8),
        onUpdatedDate: (date: Date) => {
            action('onChange')(date.toDateString());
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
} as ComponentMeta<typeof DateSelector>;

export const Base: ComponentStory<typeof DateSelector> = (args) => {
    return <DateSelector {...args} />;
};

export const WithErrorMessage: ComponentStory<typeof DateSelector> = (args) => {
    const [error, setError] = useState('');

    const handleUpdatedDate = (date: Date) => {
        const isGreaterThunberg = isGreaterThan2030(date);
        if (isGreaterThunberg) {
            setError('How dare you...');
        } else {
            setError('');
        }

        return !isGreaterThunberg;
    };

    const styles = getStyles();

    return (
        <View>
            <Text style={styles.container}>
                Enter a date greater than 2030 to be in error.
            </Text>
            <DateSelector
                {...args}
                onUpdatedDate={handleUpdatedDate}
                errorMessage={error}
            />
        </View>
    );

    function getStyles() {
        return StyleSheet.create({
            container: { padding: 8 },
        });
    }
};

function isGreaterThan2030(date: Date): boolean {
    return date.getFullYear() > 2030;
}
