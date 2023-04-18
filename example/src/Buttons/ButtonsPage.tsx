import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Screen } from 'smartway-react-native-ui';

export const ButtonsPage = () => {
    return (
        <Screen style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="filled">
                    Filled
                </Button>
                <Button style={styles.button} status="primary" mode="filled">
                    Filled
                </Button>
                <Button style={styles.button} status="information" mode="filled">
                    Filled
                </Button>
                <Button style={styles.button} status="success" mode="filled">
                    Filled
                </Button>
                <Button style={styles.button} status="warning" mode="filled">
                    Filled
                </Button>
                <Button style={styles.button} status="error" mode="filled">
                    Filled
                </Button>
                <Button style={styles.button} disabled mode="filled">
                    Filled
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="text">
                    Text
                </Button>
                <Button style={styles.button} status="primary" mode="text">
                    Text
                </Button>
                <Button style={styles.button} status="information" mode="text">
                    Text
                </Button>
                <Button style={styles.button} status="success" mode="text">
                    Text
                </Button>
                <Button style={styles.button} status="warning" mode="text">
                    Text
                </Button>
                <Button style={styles.button} status="error" mode="text">
                    Text
                </Button>
                <Button style={styles.button} disabled mode="text">
                    Text
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.outlinedButton} mode="outlined">
                    Outlined
                </Button>
                <Button style={styles.outlinedButton} status="primary" mode="outlined">
                    Outlined
                </Button>
                <Button style={styles.outlinedButton} status="information" mode="outlined">
                    Outlined
                </Button>
                <Button style={styles.outlinedButton} status="success" mode="outlined">
                    Outlined
                </Button>
                <Button style={styles.outlinedButton} status="warning" mode="outlined">
                    Outlined
                </Button>
                <Button style={styles.outlinedButton} status="error" mode="outlined">
                    Outlined
                </Button>
                <Button style={styles.outlinedButton} disabled mode="outlined">
                    Outlined
                </Button>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        margin: 6,
    },
    outlinedButton: {
        margin: 5,
    },
});
