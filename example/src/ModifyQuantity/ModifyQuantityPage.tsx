import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ModifyQuantity, Screen, useTheme } from 'smartway-react-native-ui';

export const ModifyQuantityPage = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: theme.sw.spacing.m,
        },
    });

    const [value, setValue] = useState<string>('0');

    const onAdd = () => {
        setValue((parseInt(value) + 1).toString());
    };
    const onMinus = () => {
        setValue((parseInt(value) - 1).toString());
    };

    return (
        <Screen style={styles.container}>
            <ModifyQuantity onMinus={onMinus} onAdd={onAdd} text={'Stick'} inputValue={value} />
        </Screen>
    );
};
