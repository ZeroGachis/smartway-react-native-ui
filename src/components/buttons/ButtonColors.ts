import type { ThemType } from 'src/styles/themes';
import type { ButtonStatus } from './BaseButtonProps';

export const getButtonColors = (
    theme: ThemType,
    status?: ButtonStatus,
    disabled?: boolean,
): string => {
    if (disabled) {
        return theme.sw.colors.neutral[500];
    }
    switch (status) {
        case 'primary':
            return theme.sw.colors.primary[400];
        default:
            return theme.sw.colors.neutral[700];
    }
};

export const getIconButtonColors = (
    theme: ThemType,
    status?: ButtonStatus,
    disabled?: boolean,
): string => {
    if (disabled) {
        return theme.sw.colors.neutral[500];
    }
    switch (status) {
        case 'primary':
            return theme.sw.colors.primary[400];
        default:
            return theme.sw.colors.neutral[700];
    }
};
