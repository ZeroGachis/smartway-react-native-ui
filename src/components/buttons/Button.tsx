import React from 'react';
import { TextButton } from './TextButton';
import { Button as BaseButton } from 'react-native-paper';
import { FilledButton } from './FilledButton';
import type { BaseButtonProps } from './BaseButtonProps';
import { OutlinedButton } from './OutlinedButton';

interface ButtonProps extends BaseButtonProps {
    mode?: 'filled' | 'outlined' | 'text';
}

export const Button = ({
    mode = 'text',
    children,
    style,
    labelStyle,
    onClick,
    status = 'primary',
    disabled,
    testID,
}: ButtonProps) => {
    if (mode === 'text') {
        return (
            <TextButton
                status={status}
                style={style}
                labelStyle={labelStyle}
                onClick={onClick}
                testID={testID}
                disabled={disabled}
            >
                {children}
            </TextButton>
        );
    } else if (mode === 'filled') {
        return (
            <FilledButton
                status={status}
                style={style}
                labelStyle={labelStyle}
                onClick={onClick}
                testID={testID}
                disabled={disabled}
            >
                {children}
            </FilledButton>
        );
    } else if (mode === 'outlined') {
        return (
            <OutlinedButton
                status={status}
                style={style}
                labelStyle={labelStyle}
                onClick={onClick}
                testID={testID}
                disabled={disabled}
            >
                {children}
            </OutlinedButton>
        );
    } else {
        return (
            <BaseButton
                style={style}
                disabled={disabled}
                labelStyle={labelStyle}
                onPress={onClick}
                testID={testID}
            >
                {children}
            </BaseButton>
        );
    }
};
