import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SnackBar } from 'smartway-react-native-ui';
import { IconsName } from '../config/IconList';

type ComponentProps = React.ComponentProps<typeof SnackBar>;

export default {
    title: 'components/SnackBar',
    component: SnackBar,
    args: {},
    argTypes: {
        onDismiss: { action: 'onDismiss' },
        visible: { type: 'boolean' },
        duration: { type: 'number' },
        iconName: { control: { type: 'select' }, options: IconsName },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { flex: 1 },
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
        message: 'This is a message',
        action: {
            label: 'Longer action',
            onPress: () => {
                console.log('callBack');
            },
        },
    },
};
Default.parameters = { noSafeArea: false };
