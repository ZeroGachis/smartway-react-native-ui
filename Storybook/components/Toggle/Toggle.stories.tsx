import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Toggle } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof Toggle>;

export default {
    title: 'components/Toggle',
    component: Toggle,
    args: {},
    argTypes: {
        isToggled: { type: 'boolean' },
        onValueChange: { action: 'onValueChange' },
        disabled: { type: 'boolean' },
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
        text: '%',
    },
};
Default.parameters = { noSafeArea: false };
