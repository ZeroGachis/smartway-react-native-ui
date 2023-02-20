import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Screen } from 'smartway-react-native-ui';

export const ButtonsPage = () => {
    return (
        <Screen style={styles.container}>
            <Button mode="text">Text button</Button>
            <Button mode="filled">Filled button</Button>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
