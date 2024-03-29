import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../..//styles/themes';
import { Button } from '../buttons/Button';
import { Icon } from '../icons/Icon';
import { Body } from '../typography/Body';

export interface Props {
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
            padding: theme.sw.spacing.m,
            backgroundColor: theme.sw.color.neutral[0],
            borderRadius: 24,
            justifyContent: 'space-between',
            elevation: 1,
            ...style,
        },
        text: {
            // TODO: use new tokens
            marginLeft: 12,
            color: theme.sw.color.neutral[800],
        },
        buttonStyle: {
            borderColor: 'rgba(255, 86, 48, 0.5)',
            borderWidth: 1,
            borderRadius: 8,
            // TODO: use new tokens
            paddingHorizontal: 12,
        },
        iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon size={24} name="printer" />
                <Body style={styles.text}>{text}</Body>
            </View>
            <Button style={styles.buttonStyle} onPress={onPress}>
                {buttonLabel}
            </Button>
        </View>
    );
};
