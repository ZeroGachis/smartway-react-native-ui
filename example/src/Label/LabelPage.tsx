import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Label, Screen, useTheme } from 'smartway-react-native-ui';

export const LabelPage = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
        },
        label: {
            margin: theme.sw.spacing.xs,
        },
        row: { flexDirection: 'row' },
    });

    return (
        <Screen style={styles.container}>
            <View style={styles.row}>
                <Label style={styles.label} type="filled" text="Label" />
                <Label style={styles.label} type="soft" text="Label" />
                <Label style={styles.label} type="outlined" text="Label" />
            </View>
            <View style={styles.row}>
                <Label style={styles.label} type="filled" labelColor="primary" text="Label" />
                <Label style={styles.label} type="soft" labelColor="primary" text="Label" />
                <Label style={styles.label} type="outlined" labelColor="primary" text="Label" />
            </View>
            <View style={styles.row}>
                <Label style={styles.label} type="filled" labelColor="secondary" text="Label" />
                <Label style={styles.label} type="soft" labelColor="secondary" text="Label" />
                <Label style={styles.label} type="outlined" labelColor="secondary" text="Label" />
            </View>
            <View style={styles.row}>
                <Label style={styles.label} type="filled" labelColor="information" text="Label" />
                <Label style={styles.label} type="soft" labelColor="information" text="Label" />
                <Label style={styles.label} type="outlined" labelColor="information" text="Label" />
            </View>
            <View style={styles.row}>
                <Label style={styles.label} type="filled" labelColor="success" text="Label" />
                <Label style={styles.label} type="soft" labelColor="success" text="Label" />
                <Label style={styles.label} type="outlined" labelColor="success" text="Label" />
            </View>
            <View style={styles.row}>
                <Label style={styles.label} type="filled" labelColor="warning" text="Label" />
                <Label style={styles.label} type="soft" labelColor="warning" text="Label" />
                <Label style={styles.label} type="outlined" labelColor="warning" text="Label" />
            </View>
            <View style={styles.row}>
                <Label style={styles.label} type="filled" labelColor="error" text="Label" />
                <Label style={styles.label} type="soft" labelColor="error" text="Label" />
                <Label style={styles.label} type="outlined" labelColor="error" text="Label" />
            </View>
        </Screen>
    );
};
