import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrintState } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof PrintState>;

export default {
    title: 'components/PrintState',
    component: PrintState,
    args: {},
    argTypes: {
        onPress: { action: 'onPress' },
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
    args: { text: 'Impression 1/3', buttonLabel: 'Stop' },
};
Default.parameters = { noSafeArea: false };
