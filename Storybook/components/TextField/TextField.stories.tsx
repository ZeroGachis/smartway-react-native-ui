import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextField } from 'smartway-react-native-ui';
import { IconsName } from '../config/IconList';

type TextFieldProps = React.ComponentProps<typeof TextField>;

export default {
    title: 'components/TextField',
    component: TextField,
    args: {},
    argTypes: {
        textType: { control: { type: 'radio' }, options: ['error', 'warning', 'information'] },
        icon: { control: { type: 'select' }, options: IconsName },
        onChangeText: { action: 'OnChange(value)' },
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
} as Meta<TextFieldProps>;

type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
    args: {
        label: 'Label',
        text: 'text',
        value: '',
    },
};
Default.parameters = { noSafeArea: false };
