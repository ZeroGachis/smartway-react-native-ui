import React, { useState } from 'react';
import { View, StyleSheet, Pressable, ViewStyle } from 'react-native';
import { Theme, useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { Body } from '../typography/Body';
import { Button } from '../buttons/Button';

type Status = Exclude<keyof Theme['sw']['color'], 'primary' | 'secondary' | 'neutral'>;

export interface AlertProps {
    status: Status;
    title?: string;
    description: string;
    buttonText?: string;
    onButtonPress?: () => void;
    onDismiss?: () => void;
    style?: ViewStyle;
}

const Alert = ({
    status,
    title,
    description,
    buttonText,
    onButtonPress,
    onDismiss,
    style,
}: AlertProps) => {
    const theme = useTheme();

    const iconName = getStatusIcon(status);
    const styles = useStyles(theme, status);

    return (
        <View style={[styles.content, style]}>
            <View style={styles.body}>
                <Icon name={iconName} size={24} color={theme.sw.color[status][500]} />
                <View style={styles.texts}>
                    {title && (
                        <Body typography="n1" style={styles.title} accessibilityRole="alert">
                            {title}
                        </Body>
                    )}
                    <Body typography="n2" style={styles.description} accessibilityRole="alert">
                        {description}
                    </Body>
                </View>
            </View>
            <View style={styles.actionsContainer}>
                {onButtonPress && buttonText && (
                    <Button status={status} onPress={onButtonPress}>
                        {buttonText}
                    </Button>
                )}
                {onDismiss && (
                    <Pressable
                        onPress={onDismiss}
                        style={styles.dismiss}
                        accessibilityLabel="Dismiss"
                        accessibilityHint="Dismiss the alert"
                        accessible
                    >
                        <Icon name="close" size={20} color={theme.sw.color[status][700]} />
                    </Pressable>
                )}
            </View>
        </View>
    );
};
function getStatusIcon(variant: Status): IconName {
    const fallback = 'info';

    if (variant === 'info') {
        return 'info';
    }
    if (variant === 'success') {
        return 'check';
    }
    if (variant === 'warning') {
        return 'alert';
    }
    if (variant === 'error') {
        return 'error';
    }
    return fallback;
}

function useAlert(defaultVisible = false) {
    const [visible, setVisible] = useState<boolean>(defaultVisible);

    const show = () => {
        setVisible(true);
    };

    const dismiss = () => {
        setVisible(false);
    };

    return {
        visible,
        show,
        dismiss,
    };
}

function useStyles(theme: Theme, variantTheme: Status) {
    return StyleSheet.create({
        content: {
            backgroundColor: theme.sw.color[variantTheme][100],
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: theme.sw.spacing.s,
        },
        body: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.sw.spacing.s,
            flexGrow: 1,
            flexShrink: 1,
        },
        texts: {
            gap: theme.sw.spacing.xs,
            flex: 1,
        },
        title: {
            color: theme.sw.color[variantTheme][700],
        },
        description: {
            color: theme.sw.color[variantTheme][700],
        },
        dismiss: {
            padding: 9,
        },
        actionsContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.sw.spacing.s,
        },
    });
}

export { useAlert };
export default Alert;
