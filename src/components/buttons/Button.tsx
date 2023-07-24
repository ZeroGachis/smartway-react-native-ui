import React from 'react';
import { TextButton } from './TextButton';
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
    status,
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
    } else {
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
    }
};
