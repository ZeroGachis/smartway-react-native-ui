import React, { useState } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { TextInput as BaseTextInput, TextInputProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';

interface Props extends TextInputProps {
    style?: ViewStyle;
    label: string;
    value: string;
    onChangeText?: (value: string) => void;
    isError?: boolean;
    errorMessage?: string;
    informationText?: string;
    infoTextStyle?: TextStyle;
    errorMessageStyle?: TextStyle;
    errorIcon?: IconName;
    errorIconSize?: number;
    errorIconColor?: string;
}

export const TextInput = ({
    style = {},
    label,
    value,
    onChangeText,
    isError,
    errorMessage,
    informationText,
    infoTextStyle,
    errorMessageStyle,
    errorIcon = 'dlc',
    errorIconSize = 16,
    errorIconColor,
    ...props
}: Props) => {
    const theme = useTheme();

    const [focused, setFocused] = useState<boolean>(false);

    const containerStyle: ViewStyle = {
        marginBottom: theme.sw.spacing.l,
        ...style,
    };

    const inputSyle: TextStyle = {
        backgroundColor: theme.sw.colors.neutral[50],
        fontSize: 16,
        fontFamily: 'PublicSans-Regular',
    };

    const outlineStyle: ViewStyle = {
        borderWidth: 1,
        borderColor: isError
            ? theme.sw.colors.error.main
            : focused
            ? theme.sw.colors.neutral[500]
            : theme.sw.colors.neutral[400],
    };

    const informationTextStyle: TextStyle = {
        marginTop: theme.sw.spacing.xs,
        color: value.length > 0 ? theme.sw.colors.neutral[500] : theme.sw.colors.neutral[600],
        ...infoTextStyle,
    };

    const errorContainer: ViewStyle = {
        flexDirection: 'row',
        marginTop: theme.sw.spacing.xs,
        alignItems: 'center',
    };

    const errorText: TextStyle = {
        marginLeft: theme.sw.spacing.xs,
        color: theme.sw.colors.error.main,
        ...errorMessageStyle,
    };

    return (
        <View style={containerStyle}>
            <BaseTextInput
                {...props}
                label={label}
                style={inputSyle}
                textColor={theme.sw.colors.neutral[900]}
                mode={'outlined'}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                error={isError}
                outlineStyle={outlineStyle}
                theme={{
                    roundness: 12,
                    colors: {
                        error: theme.sw.colors.error.main,
                        text: theme.sw.colors.neutral[800],
                        onSurfaceVariant: theme.sw.colors.neutral[500],
                        primary: theme.sw.colors.neutral[800],
                    },
                }}
                value={value}
                onChangeText={onChangeText}
            />
            {isError ? (
                <View style={errorContainer}>
                    <Icon color={errorIconColor} name={errorIcon} size={errorIconSize} />
                    <Text style={errorText}>{errorMessage}</Text>
                </View>
            ) : informationText ? (
                <Text style={informationTextStyle}>{informationText}</Text>
            ) : null}
        </View>
    );
};
