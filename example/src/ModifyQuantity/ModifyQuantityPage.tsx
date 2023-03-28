import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ModifyQuantity, Screen, useTheme } from 'smartway-react-native-ui';

export const ModifyQuantityPage = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingTop: theme.sw.spacing.m,
        },
    });

    const [value, setValue] = useState<number>(0);

    return (
        <Screen style={styles.container}>
            <ModifyQuantity
                onValueChange={setValue}
                value={value}
                minValue={0}
                maxValue={6}
                text={'Stick'}
                inputValue={value}
            />
        </Screen>
    );
};
