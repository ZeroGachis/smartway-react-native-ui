import React from 'react';
import { TextButton } from './TextButton';
import { Button as BaseButton } from 'react-native-paper';
import { FilledButton } from './FilledButton';
import type { BaseButtonProps } from './BaseButtonProps';

interface ButtonProps extends BaseButtonProps {
    mode?: 'text' | 'filled';
}

export const Button = ({
    mode = 'text',
    children,
    style,
    labelStyle,
    onClick,
    testID,
}: ButtonProps) => {
    if (mode === 'text') {
        return (
            <TextButton style={style} labelStyle={labelStyle} onClick={onClick} testID={testID}>
                {children}
            </TextButton>
        );
    } else if (mode === 'filled') {
        return (
            <FilledButton style={style} labelStyle={labelStyle} onClick={onClick} testID={testID}>
                {children}
            </FilledButton>
        );
    } else {
        return (
            <BaseButton style={style} labelStyle={labelStyle} onPress={onClick} testID={testID}>
                {children}
            </BaseButton>
        );
    }
};
