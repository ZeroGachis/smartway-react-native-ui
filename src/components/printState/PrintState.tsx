import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '../..//styles/themes';
import { Button } from '../buttons/Button';
import { Icon } from '../icons/Icon';

interface Props {
    text: string;
    buttonLabel: string;
    onPress: () => void;
    style?: ViewStyle;
}

export const PrintState = ({ text, buttonLabel, onPress, style }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 24,
            backgroundColor: theme.sw.colors.neutral[50],
            borderRadius: 24,
            justifyContent: 'space-between',
            elevation: 1,
            ...style,
        },
        text: {
            marginLeft: theme.sw.spacing.s,
            color: theme.sw.colors.neutral[800],
        },
        buttonStyle: {
            borderColor: 'rgba(255, 86, 48, 0.5)',
            borderWidth: 1,
            borderRadius: 8,
        },
    });
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Icon size={24} name="print" />
                <Text style={styles.text}>{text}</Text>
            </View>
            <Button
                labelStyle={{ color: theme.sw.colors.error.main }}
                style={styles.buttonStyle}
                onClick={onPress}
                mode="text"
            >
                {buttonLabel}
            </Button>
        </View>
    );
};
