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
        case 'information':
            return theme.sw.colors.information[400];
        case 'success':
            return theme.sw.colors.success[400];
        case 'warning':
            return theme.sw.colors.warning[400];
        case 'error':
            return theme.sw.colors.error[400];
        default:
            return theme.sw.colors.neutral[700];
    }
};
