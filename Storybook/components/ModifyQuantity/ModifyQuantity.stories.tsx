import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ModifyQuantity } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof ModifyQuantity>;

export default {
    title: 'components/ModifyQuantity',
    component: ModifyQuantity,
    args: {
        value: 0,
        minValue: 0,
        maxValue: 6,
        text: 'Stick',
    },
    argTypes: {
        onValueChange: { action: 'onChangeValue' },
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
    args: {},
};
Default.parameters = { noSafeArea: false };
