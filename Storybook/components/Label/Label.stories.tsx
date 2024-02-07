import type { Meta, StoryObj } from '@storybook/react-native';
import { Label } from '../../../src/components/label/Label';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type LabelProps = React.ComponentProps<typeof Label>;

export default {
    title: 'components/Label',
    component: Label,
    args: {
        text: 'text',
    },
    argTypes: {
        text: {
            control: { type: 'text' },
        },
        size: {
            control: { type: 'radio' },
            options: ['m', 's'],
        },
    },

    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { padding: 16 },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as Meta<LabelProps>;

type Story = StoryObj<LabelProps>;

export const Default: Story = (args) => {
    const rowStyles = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    } as const;

    const columnStyles = {
        gap: 8,
    };

    return (
        <View style={rowStyles}>
            <View style={columnStyles}>
                <Label {...args} status='neutral' variant='filled' />
                <Label {...args} status='neutral' variant='soft' />
                <Label {...args} status='neutral' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Label {...args} status='primary' variant='filled' />
                <Label {...args} status='primary' variant='soft' />
                <Label {...args} status='primary' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Label {...args} status='secondary' variant='filled' />
                <Label {...args} status='secondary' variant='soft' />
                <Label {...args} status='secondary' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Label {...args} status='information' variant='filled' />
                <Label {...args} status='information' variant='soft' />
                <Label {...args} status='information' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Label {...args} status='success' variant='filled' />
                <Label {...args} status='success' variant='soft' />
                <Label {...args} status='success' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Label {...args} status='warning' variant='filled' />
                <Label {...args} status='warning' variant='soft' />
                <Label {...args} status='warning' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Label {...args} status='error' variant='filled' />
                <Label {...args} status='error' variant='soft' />
                <Label {...args} status='error' variant='outlined' />
            </View>
        </View>
    );
};
Default.parameters = { noSafeArea: false };
