import React, { useState } from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { TextInput as BaseTextInput, TextInputProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { IconName } from '../icons/IconProps';
import { TextIndication, TextType } from './TextIndication';

interface Props extends TextInputProps {
    style?: ViewStyle;
    inputStyles?: TextStyle;
    label?: string;
    value: string;
    text?: string;
    textType: TextType;
    icon?: IconName;
    onChangeText?: (value: string) => void;
    iconSize?: number;
    iconColor?: string;
}

export const TextInput = ({
    style,
    inputStyles,
    label,
    value,
    text,
    textType,
    icon,
    onChangeText,
    iconSize,
    iconColor,

    ...props
}: Props) => {
    const theme = useTheme();

    const [focused, setFocused] = useState<boolean>(false);

    const containerStyle: ViewStyle = {
        marginBottom: theme.sw.spacing.l,
        ...style,
    };

    const inputStyle: TextStyle = {
        backgroundColor: theme.sw.colors.neutral[50],
        fontSize: 16,
        fontFamily: 'PublicSans-Regular',
        height: 56,
        ...inputStyles,
    };

    const outlineStyle: ViewStyle = {
        borderWidth: 1,
        borderColor:
            textType === 'error'
                ? theme.sw.colors.error.main
                : focused || value.length > 0
                ? theme.sw.colors.neutral[500]
                : theme.sw.colors.neutral[400],
    };

    return (
        <View style={containerStyle}>
            <BaseTextInput
                {...props}
                label={label}
                style={inputStyle}
                textColor={theme.sw.colors.neutral[900]}
                mode={'outlined'}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                error={textType === 'error'}
                outlineStyle={outlineStyle}
                theme={{
                    roundness: 8,
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
            {text && (
                <TextIndication
                    text={text}
                    type={textType}
                    icon={icon}
                    iconSize={iconSize}
                    iconColor={iconColor}
                />
            )}
        </View>
    );
};
