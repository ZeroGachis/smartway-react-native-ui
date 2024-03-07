import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Badge } from 'react-native-paper';
import { theme } from '../../../src/styles/themes';
import { Headline } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof Badge>;

export default {
    title: 'Colors',
} as Meta<ComponentProps>;

type Story = StoryObj<ComponentProps>;

const byNoDeprecatedToken = ([key]: string[]) => {
    return ['50', '200', '400', 'main', '600', '800'].includes(key) === false;
};
export const Default: Story = {
    render: () => {
        const neutral = Object.entries(theme.sw.colors.neutral);
        const primary = Object.entries(theme.sw.colors.primary).filter(
            byNoDeprecatedToken
        );
        const information = Object.entries(theme.sw.colors.information).filter(
            byNoDeprecatedToken
        );
        const secondary = Object.entries(theme.sw.colors.secondary).filter(
            byNoDeprecatedToken
        );
        const success = Object.entries(theme.sw.colors.success).filter(
            byNoDeprecatedToken
        );
        const warning = Object.entries(theme.sw.colors.warning).filter(
            byNoDeprecatedToken
        );
        const error = Object.entries(theme.sw.colors.error).filter(
            byNoDeprecatedToken
        );

        return (
            <ScrollView>
                <Headline size='h1'>Neutral</Headline>
                {neutral.map(([key, hex]) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: hex,
                                padding: 8,
                                color: Number(key) <= 300 ? '#000' : undefined,
                            }}
                            key={key}
                        >
                            {key}
                        </Text>
                    );
                })}
                <Headline size='h1'>Primary</Headline>
                {primary.map(([key, hex]) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: hex,
                                padding: 8,
                                color: Number(key) <= 200 ? '#000' : undefined,
                            }}
                            key={key}
                        >
                            {key}
                        </Text>
                    );
                })}
                <Headline size='h1'>Secondary</Headline>
                {secondary.map(([key, hex]) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: hex,
                                padding: 8,
                                color: Number(key) <= 200 ? '#000' : undefined,
                            }}
                            key={key}
                        >
                            {key}
                        </Text>
                    );
                })}
                <Headline size='h1'>Information</Headline>
                {information.map(([key, hex]) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: hex,
                                padding: 8,
                                color: Number(key) <= 400 ? '#000' : undefined,
                            }}
                            key={key}
                        >
                            {key}
                        </Text>
                    );
                })}
                <Headline size='h1'>Success</Headline>
                {success.map(([key, hex]) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: hex,
                                padding: 8,
                                color: Number(key) <= 300 ? '#000' : undefined,
                            }}
                            key={key}
                        >
                            {key}
                        </Text>
                    );
                })}
                <Headline size='h1'>Warning</Headline>
                {warning.map(([key, hex]) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: hex,
                                padding: 8,
                                color: Number(key) <= 500 ? '#000' : undefined,
                            }}
                            key={key}
                        >
                            {key}
                        </Text>
                    );
                })}
                <Headline size='h1'>Error</Headline>
                {error.map(([key, hex]) => {
                    return (
                        <Text
                            style={{
                                backgroundColor: hex,
                                padding: 8,
                                color: Number(key) <= 500 ? '#000' : undefined,
                            }}
                            key={key}
                        >
                            {key}
                        </Text>
                    );
                })}
            </ScrollView>
        );
    },
};
Default.parameters = { noSafeArea: false };
