import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DropDown } from 'smartway-react-native-ui';
import type { DropDownOption } from 'src/components/dropDown/DropDown';

type DropDownProps = React.ComponentProps<typeof DropDown>;

export default {
    title: 'components/DropDown',
    component: DropDown,
    args: {},
    argTypes: {
        setSelected: { action: 'setSelected(value)' },
        disabled: { type: 'boolean' },
        error: { type: 'boolean' },
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
} as Meta<DropDownProps>;

type Story = StoryObj<DropDownProps>;

const options: DropDownOption[] = [
    { value: 'Option 1' },
    { value: 'Option 2' },
    { value: 'Option 3' },
    { value: 'Option 4' },
];

export const Default: Story = {
    args: {
        placeholder: 'placeholder...',
        options: options,
    },
};
Default.parameters = { noSafeArea: false };
