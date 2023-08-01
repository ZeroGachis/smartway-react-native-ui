import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { PlusMinusInput, Screen, useTheme } from 'smartway-react-native-ui';

export const PlusMinusInputPage = () => {
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
            <PlusMinusInput
                onValueChange={setValue}
                showSoftInputOnFocus={true}
                value={value}
                minValue={0}
                maxValue={6}
                minusIcon="minus"
                plusIcon="plus"
            />
        </Screen>
    );
};
