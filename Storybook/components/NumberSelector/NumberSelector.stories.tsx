import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberSelector } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof NumberSelector>;

export default {
    title: 'components/NumberSelector',
    component: NumberSelector,
    args: {
        value: 0,
    },
    argTypes: {
        onValueChange: { action: 'onValueChange' },
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

export const Default: Story = {
    args: {
        showSoftInputOnFocus: true,
        minValue: 0,
        maxValue: 999,
        minusIcon: 'arrow-back',
        plusIcon: 'arrow-forward',
    },
};
Default.parameters = { noSafeArea: false };
