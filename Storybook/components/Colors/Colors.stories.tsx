import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Badge } from 'react-native-paper';
import { theme } from '../../../src/styles/themes';
import { Headline } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof Badge>;

export default {
    title: 'Colors',
} as Meta<ComponentProps>;

type Story = StoryObj<ComponentProps>;

const ColorItem = ({ token, value, color }) => {
    return (
        <View
            style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: value,
                padding: 8,
            }}
        >
            <Text style={{ color }}>{token}</Text>
            <Text style={{ color }}>{value}</Text>
        </View>
    );
};

export const Default: Story = {
    render: () => {
        const neutral = Object.entries(theme.sw.color.neutral);
        const primary = Object.entries(theme.sw.color.primary);
        const information = Object.entries(theme.sw.color.info);
        const secondary = Object.entries(theme.sw.color.secondary);
        const success = Object.entries(theme.sw.color.success);
        const warning = Object.entries(theme.sw.color.warning);
        const error = Object.entries(theme.sw.color.error);

        return (
            <ScrollView>
                <Headline size='h1'>Neutral</Headline>
                {neutral.map(([key, hex]) => {
                    return (
                        <ColorItem
                            color={Number(key) <= 300 ? '#000' : undefined}
                            value={hex}
                            token={key}
                            key={key}
                        />
                    );
                })}
                <Headline size='h1'>Primary</Headline>
                {primary.map(([key, hex]) => {
                    return (
                        <ColorItem
                            color={Number(key) <= 200 ? '#000' : undefined}
                            value={hex}
                            token={key}
                            key={key}
                        />
                    );
                })}
                <Headline size='h1'>Secondary</Headline>
                {secondary.map(([key, hex]) => {
                    return (
                        <ColorItem
                            color={Number(key) <= 200 ? '#000' : undefined}
                            value={hex}
                            token={key}
                            key={key}
                        />
                    );
                })}
                <Headline size='h1'>Information</Headline>
                {information.map(([key, hex]) => {
                    return (
                        <ColorItem
                            color={Number(key) <= 400 ? '#000' : undefined}
                            value={hex}
                            token={key}
                            key={key}
                        />
                    );
                })}
                <Headline size='h1'>Success</Headline>
                {success.map(([key, hex]) => {
                    return (
                        <ColorItem
                            color={Number(key) <= 300 ? '#000' : undefined}
                            value={hex}
                            token={key}
                            key={key}
                        />
                    );
                })}
                <Headline size='h1'>Warning</Headline>
                {warning.map(([key, hex]) => {
                    return (
                        <ColorItem
                            color={Number(key) <= 500 ? '#000' : undefined}
                            value={hex}
                            token={key}
                            key={key}
                        />
                    );
                })}
                <Headline size='h1'>Error</Headline>
                {error.map(([key, hex]) => {
                    return (
                        <ColorItem
                            color={Number(key) <= 500 ? '#000' : undefined}
                            value={hex}
                            token={key}
                            key={key}
                        />
                    );
                })}
            </ScrollView>
        );
    },
};

Default.parameters = { noSafeArea: false };
