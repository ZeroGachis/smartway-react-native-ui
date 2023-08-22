import React, { useState } from 'react';
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
    const value = '999';

    return (
        <Screen style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <NumberField
                    style={styles.numberField}
                    value={value}
                    minValue={0}
                    maxValue={100}
                    size="m"
                    state="prefilled"
                />
                <NumberField style={styles.numberField} value={value} state="prefilled-focused" />
                <NumberField style={styles.numberField} value={value} state="filled-focused" />
                <NumberField style={styles.numberField} value={value} state="filled" />
                <NumberField style={styles.numberField} value={value} state="readonly" />
                <NumberField style={styles.numberField} value={value} state="error" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <NumberField style={styles.numberField} value={value} size="s" state="prefilled" />
                <NumberField
                    style={styles.numberField}
                    value={value}
                    size="s"
                    state="prefilled-focused"
                />
                <NumberField
                    style={styles.numberField}
                    value={value}
                    size="s"
                    state="filled-focused"
                />
                <NumberField style={styles.numberField} value={value} size="s" state="filled" />
                <NumberField style={styles.numberField} value={value} size="s" state="readonly" />
                <NumberField style={styles.numberField} value={value} size="s" state="error" />
            </View>
            <View style={{ flexDirection: 'row' }}>
                {/* Example without value to hilight the last value on cleared case */}
                <NumberField style={styles.numberField} size="m" state="prefilled" />
            </View>
        </Screen>
    );
};
