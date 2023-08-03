import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QuantityField, Screen, useTheme } from 'smartway-react-native-ui';

export const QuantityFieldPage = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingTop: theme.sw.spacing.m,
        },
        quantityField: {
            marginHorizontal: 10,
            marginVertical: 10,
        },
    });

    return (
        <Screen style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <QuantityField
                    style={styles.quantityField}
                    value="999"
                    size="m"
                    state="prefilled"
                />
                <QuantityField style={styles.quantityField} value="999" state="prefilled-focused" />
                <QuantityField style={styles.quantityField} value="999" state="filled-focused" />
                <QuantityField style={styles.quantityField} value="999" state="filled" />
                <QuantityField style={styles.quantityField} value="999" state="readonly" />
                <QuantityField style={styles.quantityField} value="999" state="error" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <QuantityField
                    style={styles.quantityField}
                    value="999"
                    size="s"
                    state="prefilled"
                />
                <QuantityField
                    style={styles.quantityField}
                    value="999"
                    size="s"
                    state="prefilled-focused"
                />
                <QuantityField
                    style={styles.quantityField}
                    value="999"
                    size="s"
                    state="filled-focused"
                />
                <QuantityField style={styles.quantityField} value="999" size="s" state="filled" />
                <QuantityField style={styles.quantityField} value="999" size="s" state="readonly" />
                <QuantityField style={styles.quantityField} value="999" size="s" state="error" />
            </View>
        </Screen>
    );
};
