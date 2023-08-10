import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { PrintState, Screen, useTheme } from 'smartway-react-native-ui';

export const PrintPage = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            paddingTop: theme.sw.spacing.m,
        },
    });

    return (
        <Screen style={styles.container}>
            <PrintState
                buttonLabel="Stop"
                onPress={() => {
                    Alert.alert('Stop button pressed !');
                }}
                text={'Impression 1/3'}
            />
        </Screen>
    );
};
