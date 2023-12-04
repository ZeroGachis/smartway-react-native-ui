import { Badge } from 'smartway-react-native-ui';
import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default {
    title: 'components/Badge',
    component: Badge,
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
} as ComponentMeta<typeof Badge>;

export const Base: ComponentStory<typeof Badge> = () => <Badge number={1500} />;

export const NotTruncated: ComponentStory<typeof Badge> = () => (
    <Badge number={1500} maxDigits={4} />
);

export const Truncated: ComponentStory<typeof Badge> = () => (
    <Badge number={1500} maxDigits={3} />
);
