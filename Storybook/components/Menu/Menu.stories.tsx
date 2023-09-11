/* eslint-disable @typescript-eslint/no-empty-function */
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Menu } from 'smartway-react-native-ui';
import type { MenuOption } from 'src/components/menu/Menu';
import { IconsName } from '../config/IconList';

type ComponentProps = React.ComponentProps<typeof Menu>;

export default {
    title: 'components/Menu',
    component: Menu,
    args: {
        icon: 'settings',
    },
    argTypes: {
        icon: { control: { type: 'select' }, options: IconsName },
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

const options: MenuOption[] = [
    { title: 'Long element menu', onPress: () => {} },
    { title: 'Element menu 2', onPress: () => {} },
    { title: 'Option 3', onPress: () => {} },
];

type Story = StoryObj<ComponentProps>;

export const Default: Story = {
    args: {
        options: options,
    },
};
Default.parameters = { noSafeArea: false };
