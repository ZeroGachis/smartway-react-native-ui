import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Tab } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof Tab>;

export default {
    title: 'components/Tab',
    component: Tab,
    args: {},
    argTypes: {},

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
    render: (args) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Tab onPress={args.onPress} selected={args.selected} text="Zéro-Gâchis" />
                <Tab onPress={args.onPress} selected={args.selected} text="Don" />
                <Tab onPress={args.onPress} selected={args.selected} text="Casse" />
            </View>
        );
    },
};
Default.parameters = { noSafeArea: false };
