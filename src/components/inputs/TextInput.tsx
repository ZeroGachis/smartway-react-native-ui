import React, { useState } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { TextInput as BaseTextInput, TextInputProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';

interface Props extends TextInputProps {
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
    ...props
}: Props) => {
    const theme = useTheme();

    const [focused, setFocused] = useState<boolean>(false);

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

    const _outlineStyle: ViewStyle = {
        borderWidth: disabled ? 0 : 1,
        borderColor: isError
            ? theme.sw.colors.error.main
            : focused
            ? theme.sw.colors.neutral[800]
            : theme.sw.colors.neutral[400],
    };

    const _infoTextStyle: TextStyle = {
        marginTop: theme.sw.spacing.xs,
        color: theme.sw.colors.neutral[600],
    };

    return (
        <View style={containerStyle}>
            <Text style={_labelStyle}>{label}</Text>
            <BaseTextInput
                {...props}
                disabled={disabled}
                placeholder={placeHolder}
                placeholderTextColor={theme.sw.colors.neutral[400]}
                style={_inputSyle}
                textColor={theme.sw.colors.neutral[900]}
                mode={'outlined'}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                error={isError}
                outlineStyle={_outlineStyle}
                theme={{
                    roundness: 12,
                    colors: {
                        error: theme.sw.colors.error.main,
                    },
                }}
                value={value}
                onChangeText={onChangeText}
            />
            {isError ? (
                renderError && renderError()
            ) : (
                <Text style={_infoTextStyle}>{informationText}</Text>
            )}
        </View>
    );
};
