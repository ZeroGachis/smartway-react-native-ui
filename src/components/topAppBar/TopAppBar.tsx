import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { StyleSheet, type ViewStyle } from 'react-native';
import { Headline } from '../typography/Headline';
import DeviceInfo from 'react-native-device-info';
import type { WithTestID } from 'src/shared/type';
import TopAppBarAction from './TopAppBarAction';
import {TopAppBarMenu} from "./Menu/TopAppBarMenu";
import TopAppBarMenuItem from "./Menu/TopAppBarMenuItem";

export interface Title {
    value: ReactNode;
    onPress?: () => void;
}

export type TopAppBarProps = WithTestID<{
    size?: 'small' | 'medium' | 'large' | 'center-aligned';
    title: Title;
    onBack?: () => void;
    style?: ViewStyle;
    action?: ReactNode;
}>;

// eslint-disable-next-line react/function-component-definition
export function TopAppBar({
    size = 'small',
    title,
    onBack,
    style,
    testID,
    action,
}: TopAppBarProps) {
    const theme = useTheme();

    const styles = useStyles(size, style);

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
            {action}
        </Appbar.Header>
    );
}
TopAppBar.Action = TopAppBarAction;
TopAppBar.Menu = TopAppBarMenu;
TopAppBar.MenuItem = TopAppBarMenuItem;

function useStyles(
    size: TopAppBarProps['size'],
    style: TopAppBarProps['style'],
) {
    const theme = useTheme();
    const isTablet = DeviceInfo.isTablet();
    return StyleSheet.create({
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
}
