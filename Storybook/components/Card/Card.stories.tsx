import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Card, Headline } from 'smartway-react-native-ui';

type CardProps = React.ComponentProps<typeof Card>;

const textInside = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quisquam, nulla
earum ut porro distinctio autem deleniti laborum nisi ex ipsum nihil beatae
facilis. Vel unde molestias quibusdam dolorem libero.
`;

export default {
    title: 'components/Card',
    component: Card,
    args: {
        isOpened: true,
        title: 'super menu',
    },
    argTypes: {
        isOpened: { type: 'boolean' },
        onClose: { action: 'onClose' },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { flex: 1, alignItems: 'center', padding: 16 },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as Meta<CardProps>;

type Story = StoryObj<CardProps>;

export const Default: Story = {
    render: () => {
        return (
            <Card>
                <Headline size='h2'>Un Titre</Headline>
                <Body>{textInside}</Body>
            </Card>
        );
    },
};
Default.parameters = { noSafeArea: false };
