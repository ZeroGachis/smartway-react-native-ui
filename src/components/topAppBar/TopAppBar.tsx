import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { StyleSheet, type ViewStyle } from 'react-native';
import { Headline } from '../typography/Headline';
import DeviceInfo from "react-native-device-info";
import type { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import type { WithTestID } from 'src/shared/type';

interface Icon {
    name: IconSource;
    onPress?: () => void;
}

export interface Title {
    value: ReactNode;
    onPress?: () => void;
}

export type Props = WithTestID<{
    size?: 'small' | 'medium' | 'large' | 'center-aligned';
    title: Title;
    icon?: Icon;
    onBack?: () => void;
    style?: ViewStyle;
}>;

export const TopAppBar = ({
    size = 'small',
    title,
    icon,
    onBack,
    style,
    testID,
}: Props) => {
    const theme = useTheme();
    const isTablet = DeviceInfo.isTablet();

    const styles = StyleSheet.create({
        button: {
            backgroundColor: 'rgba(145, 158, 171, 0.24)',
            borderRadius: 18,
            marginLeft: isTablet ? 12 : theme.sw.spacing.xs,
        },
        title: {
            paddingTop: size === 'medium' ? 9 : 0,
            paddingBottom: 0,
            justifyContent: 'flex-start',
        },
        header: {
            paddingHorizontal: 12,
            paddingBottom: 0,
            ...style,
        },
    });
    const getIconColor = () => {
        return theme.sw.colors.neutral[600];
    };
    return (
        <Appbar.Header
            mode={size}
            style={styles.header}
            statusBarHeight={0}
            testID={testID}
        >
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
                        <Headline size='h2'>{title.value}</Headline>
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
