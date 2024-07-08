import type { Meta, StoryObj } from '@storybook/react-native';
import { Tag } from '../../../src/components/tag/Tag';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type TagProps = React.ComponentProps<typeof Tag>;

export default {
    title: 'components/Tag',
    component: Tag,
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
} as Meta<TagProps>;

type Story = StoryObj<TagProps>;

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
                <Tag {...args} status='neutral' variant='filled' />
                <Tag {...args} status='neutral' variant='soft' />
                <Tag {...args} status='neutral' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Tag {...args} status='primary' variant='filled' />
                <Tag {...args} status='primary' variant='soft' />
                <Tag {...args} status='primary' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Tag {...args} status='secondary' variant='filled' />
                <Tag {...args} status='secondary' variant='soft' />
                <Tag {...args} status='secondary' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Tag {...args} status='information' variant='filled' />
                <Tag {...args} status='information' variant='soft' />
                <Tag {...args} status='information' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Tag {...args} status='success' variant='filled' />
                <Tag {...args} status='success' variant='soft' />
                <Tag {...args} status='success' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Tag {...args} status='warning' variant='filled' />
                <Tag {...args} status='warning' variant='soft' />
                <Tag {...args} status='warning' variant='outlined' />
            </View>
            <View style={columnStyles}>
                <Tag {...args} status='error' variant='filled' />
                <Tag {...args} status='error' variant='soft' />
                <Tag {...args} status='error' variant='outlined' />
            </View>
        </View>
    );
};
Default.parameters = { noSafeArea: false };
