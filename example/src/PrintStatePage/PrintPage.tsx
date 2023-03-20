import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrintState, Screen } from 'smartway-react-native-ui';

export const PrintPage = () => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 16,
        },
    });

    return (
        <Screen style={styles.container}>
            <PrintState buttonLabel="Stop" onPress={() => {}} text={'Impression 1/3'} />
        </Screen>
    );
};
