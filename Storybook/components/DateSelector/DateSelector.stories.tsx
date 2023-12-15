import { DateSelector } from 'smartway-react-native-ui';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default {
    title: 'components/DateSelector',
    component: DateSelector,
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

export const Base: ComponentStory<typeof DateSelector> = () => (
    <DateSelector initialDate={new Date(2023, 0, 8)} />
);
