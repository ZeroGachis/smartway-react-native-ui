import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NumberField, Screen, useTheme } from 'smartway-react-native-ui';

export const NumberFieldPage = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingTop: theme.sw.spacing.m,
        },
        numberField: {
            marginHorizontal: 10,
            marginVertical: 10,
        },
    });

    return (
        <Screen style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <NumberField style={styles.numberField} value="999" size="m" state="prefilled" />
                <NumberField style={styles.numberField} value="999" state="prefilled-focused" />
                <NumberField style={styles.numberField} value="999" state="filled-focused" />
                <NumberField style={styles.numberField} value="999" state="filled" />
                <NumberField style={styles.numberField} value="999" state="readonly" />
                <NumberField style={styles.numberField} value="999" state="error" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <NumberField style={styles.numberField} value="999" size="s" state="prefilled" />
                <NumberField
                    style={styles.numberField}
                    value={'999'}
                    size="s"
                    state="prefilled-focused"
                />
                <NumberField
                    style={styles.numberField}
                    value="999"
                    size="s"
                    state="filled-focused"
                />
                <NumberField style={styles.numberField} value="999" size="s" state="filled" />
                <NumberField style={styles.numberField} value="999" size="s" state="readonly" />
                <NumberField style={styles.numberField} value="999" size="s" state="error" />
            </View>
        </Screen>
    );
};
