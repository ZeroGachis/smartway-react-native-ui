import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Keyboard } from 'smartway-react-native-ui';

type KeyboardProps = React.ComponentProps<typeof Keyboard>;

/*
    style?: ViewStyle;
    height: number;
    focusedInput: string;
    setValues: Dispatch<SetStateAction<any>>;
    onSubmit: () => void;
    submitButtonTestID?: string;
    deleteButtonTestID?: string;
*/
export default {
    title: 'components/Keyboard',
    component: Keyboard,
    args: {
        height: 200,
    },
    argTypes: {
        height: {
            step: 1,
            min: 200,
            max: 800,
            range: true,
        },
        setValues: { action: 'setValue' },
        onSubmit: { action: 'onSubmit' },
        focusedInput: {},
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
} as Meta<KeyboardProps>;

type Story = StoryObj<KeyboardProps>;

export const Default: Story = {
    args: {
        focusedInput: 'upperInput',
    },
};
Default.parameters = { noSafeArea: false };
