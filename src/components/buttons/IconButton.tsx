import React from 'react';
import { FilledIconButton } from './FilledIconButton';
import { OutlinedIconButton } from './OutlinedIconButton';
import type { BaseIconButtonProps } from './BaseIconButtonProps';
import { InlineIconButton } from './InlineIconButton';

interface IconButtonProps extends BaseIconButtonProps {
    mode?: 'filled' | 'outlined' | 'inline';
}

export const IconButton = ({
    mode = 'inline',
    size = 20,
    style,
    onClick,
    status,
    disabled,
    testID,
}: IconButtonProps) => {
    if (mode === 'inline') {
        return (
            <InlineIconButton
                status={status}
                size={size}
                style={style}
                onClick={onClick}
                testID={testID}
                disabled={disabled}
            />
        );
    } else if (mode === 'filled') {
        return (
            <FilledIconButton
                status={status}
                size={size}
                style={style}
                onClick={onClick}
                testID={testID}
                disabled={disabled}
            />
        );
    } else {
        return (
            <OutlinedIconButton
                status={status}
                size={size}
                style={style}
                onClick={onClick}
                testID={testID}
                disabled={disabled}
            />
        );
    }
};
