import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { QuantityField, Screen, useTheme } from 'smartway-react-native-ui';

export const QuantityFieldPage = () => {
    const theme = useTheme();
    const [value, setValue] = useState<number>(0);

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingTop: theme.sw.spacing.m,

        },
    });

    return (
        <Screen style={styles.container}>
            <View style={{ flexDirection:'row' }}>
                <QuantityField value="999" mode="outlined" size="m" state="prefilled" />
                <QuantityField value="999" mode="outlined" state="prefilled-focused" />
                <QuantityField value="999" mode="outlined" state="filled-focused" />
                <QuantityField value="999" mode="outlined" state="filled" />
                <QuantityField value="999" mode="outlined" state="readonly" />
                <QuantityField value="999" mode="outlined" state="error" />
            </View>
            <View style={{ flexDirection:'row' }}>
                <QuantityField value="999" mode="outlined" size="s" state="prefilled" />
                <QuantityField value="999" mode="outlined" size="s" state="prefilled-focused" />
                <QuantityField value="999" mode="outlined" size="s" state="filled-focused" />
                <QuantityField value="999" mode="outlined" size="s" state="filled" />
                <QuantityField value="999" mode="outlined" size="s" state="readonly" />
                <QuantityField value="999" mode="outlined" size="s" state="error" />
            </View>
        </Screen>
    );
};
