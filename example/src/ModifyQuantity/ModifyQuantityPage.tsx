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

    const [value, setValue] = useState<number>(0);

    const onAdd = () => {
        setValue(value + 1);
    };
    const onMinus = () => {
        setValue(value - 1);
    };

    return (
        <Screen style={styles.container}>
            <ModifyQuantity
                minValue={0}
                maxValue={6}
                onMinus={onMinus}
                onAdd={onAdd}
                text={'Stick'}
                inputValue={value}
            />
        </Screen>
    );
};
