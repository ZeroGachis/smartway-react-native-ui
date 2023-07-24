import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, IconButton, Screen } from 'smartway-react-native-ui';

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
                <Button style={styles.outlinedButton} disabled mode="outlined">
                    Outlined
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <IconButton style={styles.button} mode="filled" />
                <IconButton style={styles.button} status="primary" mode="filled" />
                <IconButton style={styles.button} disabled mode="filled" />
            </View>
            <View style={styles.buttonContainer}>
                <IconButton style={styles.button} mode="inline" />
                <IconButton style={styles.button} status="primary" mode="inline" />
                <IconButton style={styles.button} disabled mode="inline" />
            </View>
            <View style={styles.buttonContainer}>
                <IconButton style={styles.outlinedButton} mode="outlined" />
                <IconButton style={styles.outlinedButton} status="primary" mode="outlined" />
                <IconButton style={styles.outlinedButton} disabled mode="outlined" />
            </View>
            <View style={styles.buttonContainer}>
                <IconButton style={smallStyles.button} size={10} mode="filled" />
                <IconButton style={smallStyles.button} size={10} status="primary" mode="filled" />
                <IconButton style={smallStyles.button} size={10} disabled mode="filled" />
            </View>
            <View style={styles.buttonContainer}>
                <IconButton style={smallStyles.button} size={10} mode="inline" />
                <IconButton style={smallStyles.button} size={10} status="primary" mode="inline" />
                <IconButton style={smallStyles.button} size={10} disabled mode="inline" />
            </View>
            <View style={styles.buttonContainer}>
                <IconButton style={smallStyles.outlinedButton} size={10} mode="outlined" />
                <IconButton
                    style={smallStyles.outlinedButton}
                    size={10}
                    status="primary"
                    mode="outlined"
                />
                <IconButton style={smallStyles.outlinedButton} size={10} disabled mode="outlined" />
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
    smallButton: {
        margin: 6,
    },
    outlinedButton: {
        margin: 5,
    },
});

const smallStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        margin: 11,
    },
    outlinedButton: {
        margin: 10,
    },
});
