import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ModifyQuantity, Screen, useTheme } from 'smartway-react-native-ui';

const product = {
    label: 'Crème dessert chocolat avec  dessert chocolat avec avec.',
    scanDate: '16:40',
    initialPrice: '2.5€',
    barcode: '349123451234',
    quantity: 1,
    discount: '-30%',
    finalPrice: '1.75€',
};

export const ModifyQuantityPage = () => {
    const theme = useTheme();
    const [value, setValue] = useState(product);

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingTop: theme.sw.spacing.m,
        },
    });

    return (
        <Screen style={styles.container}>
            <ModifyQuantity
                onValueChange={setValue}
                value={value.quantity}
                minValue={0}
                maxValue={6}
                text={'Stick'}
            />
        </Screen>
    );
};
