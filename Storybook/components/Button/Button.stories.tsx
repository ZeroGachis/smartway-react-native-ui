import type { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../../src/components/buttons/Button';

type ButtonType = typeof Button;

export default {
    title: 'components/Button',
    component: Button,
    decorators: [
        (Story) => {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Story />
                </View>
            );
        },
    ],
} as ComponentMeta<ButtonType>;

export const Default: ComponentStory<ButtonType> = (args) => {
    return <Button {...args}>Button</Button>;
};
Default.argTypes = {
    size: {
        control: { type: 'radio' },
        options: ['s', 'm'],
    },
    variant: {
        control: { type: 'radio' },
        options: ['filled', 'outlined', 'text'],
    },
    status: {
        control: { type: 'radio' },
        options: ['default', 'primary', 'info', 'success', 'warning', 'error', 'inherit'],
    },
    disabled: {
        control: { type: 'boolean' },
    },
    onPress: { action: 'clicked' },
};

export const Catalog: ComponentStory<ButtonType> = (args) => {
    return (
        <View style={{ gap: 8 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <Button {...args} variant="filled" status="default">
                    Button
                </Button>
                <Button {...args} variant="filled" status="primary">
                    Button
                </Button>
                <Button {...args} variant="filled" status="info">
                    Button
                </Button>
                <Button {...args} variant="filled" status="success">
                    Button
                </Button>
                <Button {...args} variant="filled" status="warning">
                    Button
                </Button>
                <Button {...args} variant="filled" status="error">
                    Button
                </Button>
                <Button {...args} variant="filled" status="inherit">
                    Button
                </Button>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <Button {...args} variant="filled" status="default" disabled>
                    Button
                </Button>
                <Button {...args} variant="filled" status="primary" disabled>
                    Button
                </Button>
                <Button {...args} variant="filled" status="info" disabled>
                    Button
                </Button>
                <Button {...args} variant="filled" status="success" disabled>
                    Button
                </Button>
                <Button {...args} variant="filled" status="warning" disabled>
                    Button
                </Button>
                <Button {...args} variant="filled" status="error" disabled>
                    Button
                </Button>
                <Button {...args} variant="filled" status="inherit" disabled>
                    Button
                </Button>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <Button {...args} variant="outlined" status="default">
                    Button
                </Button>
                <Button {...args} variant="outlined" status="primary">
                    Button
                </Button>
                <Button {...args} variant="outlined" status="info">
                    Button
                </Button>
                <Button {...args} variant="outlined" status="success">
                    Button
                </Button>
                <Button {...args} variant="outlined" status="warning">
                    Button
                </Button>
                <Button {...args} variant="outlined" status="error">
                    Button
                </Button>
                <Button {...args} variant="outlined" status="inherit">
                    Button
                </Button>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <Button {...args} variant="outlined" status="default" disabled>
                    Button
                </Button>
                <Button {...args} variant="outlined" status="primary" disabled>
                    Button
                </Button>
                <Button {...args} variant="outlined" status="info" disabled>
                    Button
                </Button>
                <Button {...args} variant="outlined" status="success" disabled>
                    Button
                </Button>
                <Button {...args} variant="outlined" status="warning" disabled>
                    Button
                </Button>
                <Button {...args} variant="outlined" status="error" disabled>
                    Button
                </Button>
                <Button {...args} variant="outlined" status="inherit" disabled>
                    Button
                </Button>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <Button {...args} variant="text" status="default">
                    Button
                </Button>
                <Button {...args} variant="text" status="primary">
                    Button
                </Button>
                <Button {...args} variant="text" status="info">
                    Button
                </Button>
                <Button {...args} variant="text" status="success">
                    Button
                </Button>
                <Button {...args} variant="text" status="warning">
                    Button
                </Button>
                <Button {...args} variant="text" status="error">
                    Button
                </Button>
                <Button {...args} variant="text" status="inherit">
                    Button
                </Button>
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <Button {...args} variant="text" status="default" disabled>
                    Button
                </Button>
                <Button {...args} variant="text" status="primary" disabled>
                    Button
                </Button>
                <Button {...args} variant="text" status="info" disabled>
                    Button
                </Button>
                <Button {...args} variant="text" status="success" disabled>
                    Button
                </Button>
                <Button {...args} variant="text" status="warning" disabled>
                    Button
                </Button>
                <Button {...args} variant="text" status="error" disabled>
                    Button
                </Button>
                <Button {...args} variant="text" status="inherit" disabled>
                    Button
                </Button>
            </View>
        </View>
    );
};
