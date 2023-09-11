import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheet, Button, useTheme } from 'smartway-react-native-ui';

type BottomSheetProps = React.ComponentProps<typeof BottomSheet>;

export default {
    title: 'components/BottomSheet',
    component: BottomSheet,
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
} as Meta<BottomSheetProps>;

type Story = StoryObj<BottomSheetProps>;

const InsideBottomSheet = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            padding: 16,
        },
        button: {
            marginVertical: theme.sw.spacing.xs,
        },
    });

    return (
        <View>
            <Button style={styles.button} variant="filled">
                Option 1
            </Button>
            <Button style={styles.button} variant="filled">
                Option 2
            </Button>
            <Button style={styles.button} variant="filled">
                Option 3
            </Button>
        </View>
    );
};

export const Default: Story = {
    render: (args) => {
        return (
            <BottomSheet
                title={args.title}
                titleProps={{ size: 'h2', style: { marginBottom: 12, textAlign: 'center' } }}
                onClose={args.onClose}
                isOpened={args.isOpened}
            >
                <InsideBottomSheet />
            </BottomSheet>
        );
    },
};
Default.parameters = { noSafeArea: false };
