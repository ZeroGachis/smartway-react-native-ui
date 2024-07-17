import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import Banner from '../../../src/components/alert/Banner';
import { action } from '@storybook/addon-actions';

type BannerType = typeof Banner;

export default {
    title: 'components/Banner',
    component: Banner,
    args: {
        status: 'info',
        title: 'This is a title',
        description: 'This is a description',
        buttonText: 'Click me',
        onButtonPress: () => action('onButtonPress')('Button pressed'),
        onDismiss: () => action('onDismiss')('Dismissed'),
    },
    decorators: [
        (Story) => {
            return (
                <View style={{ paddingTop: 16 }}>
                    <Story />
                </View>
            );
        },
    ],
} as ComponentMeta<BannerType>;

export const Base: ComponentStory<BannerType> = (args) => {
    return <Banner {...args} />;
};
Base.argTypes = {
    status: {
        control: { type: 'radio' },
        options: ['info', 'success', 'warning', 'error'],
    },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    buttonText: { control: { type: 'text' } },
    onButtonPress: {
        control: { type: 'boolean' },
        mapping: { true: action('Button pressed'), false: undefined },
    },
    onDismiss: {
        control: { type: 'boolean' },
        mapping: { true: action('Dismissed'), false: undefined },
    },
};

export const Catalog: ComponentStory<BannerType> = (args) => {
    return (
        <View style={{ gap: 8 }}>
            <Banner {...args} status="info" />
            <Banner {...args} status="success" />
            <Banner {...args} status="warning" />
            <Banner {...args} status="error" />
        </View>
    );
};
