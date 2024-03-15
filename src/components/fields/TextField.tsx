import React, { useRef } from 'react';
import { Pressable, TextStyle, View, ViewStyle, TextInput as TextInputRN } from 'react-native';
import { TextInput as BaseTextInput, TextInputProps } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { IconName } from '../icons/IconProps';
import { TextIndication, TextType } from './TextIndication';

export interface Props extends TextInputProps {
    style?: ViewStyle;
    inputStyles?: TextStyle;
    label?: string;
    value: string;
    text?: string;
    placeholder?: string;
    textType: TextType;
    icon?: IconName;
    onChangeText?: (value: string) => void;
    iconSize?: number;
    iconColor?: string;
    textColor?: string;
}

export const TextField = ({
    style,
    label,
    value,
    text,
    placeholder,
    textType,
    icon,
    onChangeText,
    iconSize,
    iconColor,
    inputStyles,
    textColor,
    ...props
}: Props) => {
    const theme = useTheme();

    const inputRef = useRef<TextInputRN>(null);

    const containerStyle: ViewStyle = {
        marginBottom: theme.sw.spacing.m,
        ...style,
    };

    const inputSyle: TextStyle = {
        backgroundColor: theme.sw.color.neutral[0],
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'PublicSans-Regular',
        height: 56,
        ...inputStyles,
    };

    const outlineStyle: ViewStyle = {
        borderWidth: 1,
        borderColor:
            textType === 'error'
                ? theme.sw.color.error[500]
                : inputRef.current?.isFocused() || value.length > 0
                ? theme.sw.color.neutral[500]
                : theme.sw.color.neutral[400],
    };

    return (
        <Pressable
            onPress={() => {
                inputRef.current?.focus();
            }}
        >
            <View style={containerStyle} pointerEvents="none">
                <BaseTextInput
                    {...props}
                    ref={inputRef}
                    label={label}
                    style={inputSyle}
                    textColor={textColor || theme.sw.color.neutral[900]}
                    mode={'outlined'}
                    error={textType === 'error'}
                    outlineStyle={outlineStyle}
                    theme={{
                        roundness: 8,
                        colors: {
                            error: theme.sw.color.error[500],
                            text: theme.sw.color.neutral[800],
                            onSurfaceVariant: theme.sw.color.neutral[500],
                            primary: theme.sw.color.neutral[800],
                        },
                    }}
                    value={value}
                    placeholder={placeholder}
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
        </Pressable>
    );
};
