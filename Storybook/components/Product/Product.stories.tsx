import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Product } from 'smartway-react-native-ui';

type ComponentProps = React.ComponentProps<typeof Product>;

export default {
    title: 'components/Product',
    component: Product,
    args: {
        scanDate: '16:40',
    },
    argTypes: {
        onPress: { action: 'onPress' },
        scanDate: { type: 'string' },
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
} as Meta<ComponentProps>;

type Story = StoryObj<ComponentProps>;

export const Default: Story = {
    args: {
        label: 'Crème dessert chocolatt',
        barcode: '978020137962',
        scanDate: '16:40',
        discount: '30%',
        finalPrice: '1.75€',
        initialPrice: '2,50€',
        quantity: 3,
    },
};
Default.parameters = { noSafeArea: false };
