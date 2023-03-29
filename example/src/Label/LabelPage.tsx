import React from 'react';
import { StyleSheet } from 'react-native';
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
    });

    return (
        <Screen style={styles.container}>
            <Label
                style={styles.label}
                bgColor={theme.sw.colors.secondary[200]}
                textColor={theme.sw.colors.secondary[600]}
                text="Label"
            />
            <Label
                style={styles.label}
                text="Label"
                bgColor={theme.sw.colors.primary[400]}
                textColor={theme.sw.colors.neutral[50]}
            />
            <Label style={styles.label} text="Label" />
        </Screen>
    );
};
