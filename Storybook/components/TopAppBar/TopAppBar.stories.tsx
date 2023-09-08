/* eslint-disable @typescript-eslint/no-empty-function */
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, TopAppBar } from 'smartway-react-native-ui';
import type { Title } from 'src/components/topAppBar/TopAppBar';

const asString = { value: 'menu' };
const asButton = { value: 'menu', onPress: () => {} };
const asComponent = { value: <Headline size="h1">Headline H1</Headline> };

type ComponentProps = React.ComponentProps<typeof TopAppBar> & {
    withBackButton?: boolean;
    onPressIcon: () => void;
    withTitleAs: 'string' | 'button' | 'component';
};

export default {
    title: 'components/TopAppBar',
    component: TopAppBar,
    args: {
        withBackButton: true,
        withTitleAs: 'string',
        size: 'small',
    },
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['small', 'medium', 'large', 'center-aligned'],
        },
        withTitleAs: { control: { type: 'radio' }, options: ['string', 'button', 'component'] },
        withBackButton: { type: 'boolean' },
        onBack: { action: 'onBack' },
        onPressIcon: { action: 'onPressIcon' },
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
    render: (args) => {
        let titleComponent: Title = asString;
        if (args.withTitleAs === 'button') titleComponent = asButton;
        if (args.withTitleAs === 'component') titleComponent = asComponent;
        return (
            <TopAppBar
                size={args.size}
                onBack={args.withBackButton ? args.onBack : undefined}
                title={titleComponent}
                icon={{ name: 'dots-vertical', onPress: args.onPressIcon }}
            />
        );
    },
};
Default.parameters = { noSafeArea: false };
