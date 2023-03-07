import React, { useState } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { TextInput as BaseTextInput } from 'react-native-paper';
import { useTheme } from '../../styles/themes';

interface Props {
    placeHolder: string;
    style?: ViewStyle;
    onChangeText?: (value: string) => void;
    value: string;
    isError?: boolean;
    renderError?: () => any;
    disabled?: boolean;
    label: string;
    informationText: string;
}

export const TextInput = ({
    placeHolder,
    style = {},
    value,
    onChangeText,
    isError,
    renderError,
    disabled,
    label,
    informationText,
}: Props) => {
    const theme = useTheme();

    const containerStyle: ViewStyle = {
        marginBottom: theme.sw.spacing.l,
        ...style,
    };

    const _inputSyle: TextStyle = {
        fontSize: 16,
        fontFamily: 'PublicSans-Regular',
    };

    const _labelStyle: TextStyle = {
        color: theme.sw.colors.neutral[800],
        fontSize: 16,
    };

    const _infoTextStyle: TextStyle = {
        marginTop: theme.sw.spacing.xs,
        color: theme.sw.colors.neutral[600],
    };

    return (
        <View style={containerStyle}>
            <Text style={_labelStyle}>{label}</Text>
            <BaseTextInput
                disabled={disabled}
                placeholder={placeHolder}
                placeholderTextColor={theme.sw.colors.neutral[400]}
                style={_inputSyle}
                textColor={theme.sw.colors.neutral[900]}
                mode={'outlined'}
                outlineColor={theme.sw.colors.neutral[400]}
                error={isError}
                theme={{
                    roundness: 12,
                    colors: {
                        primary: theme.sw.colors.neutral[800],
                        error: theme.sw.colors.error.main,
                    },
                }}
                value={value}
                onChangeText={onChangeText}
                underlineColor="transparent"
            />
            {isError ? (
                renderError && renderError()
            ) : (
                <Text style={_infoTextStyle}>{informationText}</Text>
            )}
        </View>
    );
};
