import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { StyleSheet, type ViewStyle } from 'react-native';
import { Headline } from '../typography/Headline';
import type { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';

interface Icon {
    name: IconSource;
    onPress?: () => void;
}

interface Title {
    value: ReactNode;
    onPress?: () => void;
}

interface Props {
    size?: 'small' | 'medium' | 'large' | 'center-aligned';
    title: Title;
    icon?: Icon;
    onBack?: () => void;
    style?: ViewStyle;
}

export const TopAppBar = ({ size = 'small', title, icon, onBack, style }: Props) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        button: {
            backgroundColor: 'rgba(145, 158, 171, 0.24)',
            borderRadius: 18,
            marginLeft: 12,
        },
        title: {
            paddingVertical: 9,
        },
        header: {
            paddingHorizontal: 12,
            ...style,
        },
        content: {
            justifyContent: 'flex-start',
            paddingBottom: 0,
        },
    });
    const getIconColor = () => {
        return theme.sw.colors.neutral[600];
    };
    return (
        <Appbar.Header mode={size} style={styles.header} statusBarHeight={0}>
            {onBack !== undefined && (
                <Appbar.BackAction
                    style={styles.button}
                    onPress={onBack}
                    size={theme.sw.iconbuttonsize.m}
                />
            )}
            <Appbar.Content
                title={
                    typeof title.value === 'string' ? (
                        <Headline size="h2">{title.value}</Headline>
                    ) : (
                        title.value
                    )
                }
                onPress={title.onPress}
                style={styles.title}
            />
            {icon !== undefined && (
                <Appbar.Action
                    icon={icon.name}
                    onPress={icon.onPress}
                    color={getIconColor()}
                    style={styles.button}
                    size={theme.sw.iconbuttonsize.m}
                />
            )}
        </Appbar.Header>
    );
};
