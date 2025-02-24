import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { StyleSheet, type ViewStyle } from 'react-native';
import { Headline } from '../typography/Headline';
import type { WithTestID } from 'src/shared/type';
import TopAppBarAction from './TopAppBarAction';
import { TopAppBarMenu } from './Menu/TopAppBarMenu';
import TopAppBarMenuItem from './Menu/TopAppBarMenuItem';

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
    isTablet?: boolean;
}>;

// eslint-disable-next-line react/function-component-definition
export function TopAppBar({
    size = 'small',
    title,
    onBack,
    style,
    testID,
    action,
    isTablet = true,
}: TopAppBarProps) {
    const styles = useStyles(size, style, isTablet);

    const headlineSize = isTablet ? 'n1' : isTitleBelowTopAppBar(size) ? 'n2' : 'n1';

    return (
        <Appbar.Header mode={size} style={styles.header} statusBarHeight={0} testID={testID}>
            {onBack !== undefined && (
                <Appbar.BackAction
                    style={styles.button}
                    onPress={onBack}
                    // TODO: use new tokens
                    size={32}
                />
            )}
            <Appbar.Content
                title={
                    typeof title.value === 'string' ? (
                        <Headline typography={headlineSize} style={styles.title}>
                            {title.value}
                        </Headline>
                    ) : (
                        title.value
                    )
                }
                onPress={title.onPress}
                style={styles.content}
            />
            {action}
        </Appbar.Header>
    );
}

TopAppBar.Action = TopAppBarAction;
TopAppBar.Menu = TopAppBarMenu;
TopAppBar.MenuItem = TopAppBarMenuItem;

function useStyles(size: TopAppBarProps['size'], style: TopAppBarProps['style'], isTablet: TopAppBarProps['isTablet']) {
    const theme = useTheme();

    return StyleSheet.create({
        button: {
            backgroundColor: theme.sw.color.neutral['300'],
            borderRadius: 18,
            marginLeft: isTablet ? 12 : theme.sw.spacing.xs,
        },
        content: {
            paddingTop: isTitleBelowTopAppBar(size) ? 9 : 0,
            paddingBottom: 0,
            justifyContent: 'flex-start',
        },
        title: {
            lineHeight: isTitleBelowTopAppBar(size) ? undefined : 32,
        },
        header: {
            paddingHorizontal: 12,
            paddingBottom: 0,
            marginBottom: theme.sw.spacing.m,
            backgroundColor: theme.sw.color.neutral[0],
            ...style,
        },
    });
}

function isTitleBelowTopAppBar(size: TopAppBarProps['size']) {
    return (['medium', 'large'] as (typeof size)[]).includes(size);
}
