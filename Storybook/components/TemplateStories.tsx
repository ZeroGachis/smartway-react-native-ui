import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextField } from 'smartway-react-native-ui';

type DropDownProps = React.ComponentProps<typeof TextField>;

export default {
    title: 'components/TextField',
    component: TextField,
    args: {},
    argTypes: {},

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

export const Default: Story = {
    args: {},
};
Default.parameters = { noSafeArea: false };
