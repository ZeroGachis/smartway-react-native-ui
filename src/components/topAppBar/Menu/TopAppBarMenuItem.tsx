import React, { ComponentPropsWithoutRef } from 'react';
import { Menu } from 'react-native-paper';
import { Theme, useTheme } from '../../../styles/themes';
import { GestureResponderEvent, StyleSheet } from 'react-native';
import { Icon } from '../../icons/Icon';
import { IconName } from '../../icons/IconProps';
import { WithTestID } from 'src/shared/type';
import { useTopAppBarMenu } from './TopAppBarMenu';

type TopAppBarMenuItemProps = WithTestID<
    Required<
        Pick<ComponentPropsWithoutRef<typeof Menu.Item>, 'title' | 'onPress'>
    > & {
        color?: string;
        iconName: IconName;
    }
>;
const TopAppBarMenuItem = ({
    onPress,
    title,
    testID,
    color,
    iconName,
}: TopAppBarMenuItemProps) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const { setIsOpen } = useTopAppBarMenu();

    const handleOnPress = (e: GestureResponderEvent) => {
        setIsOpen(false);
        onPress(e);
    };

    const colorTheme = color || theme.sw.colors.primary.main;

    const menuItemTheme = {
        colors: {
            onSurface: colorTheme,
        },
    };

    const leadingIcon = () => (
        <Icon name={iconName} size={24} color={colorTheme} />
    );

    return (
        <Menu.Item
            title={title}
            onPress={handleOnPress}
            style={styles.menuItem}
            titleStyle={styles.title}
            testID={testID}
            theme={menuItemTheme}
            leadingIcon={leadingIcon}
        />
    );
};

function useStyles(theme: Theme) {
    return StyleSheet.create({
        menuItem: {
            borderRadius: 18,
            paddingHorizontal: theme.sw.spacing.l,
            paddingVertical: theme.sw.spacing.m,
            height: 'auto',
        },
        title: {
            fontSize: 16,
            fontWeight: '600',
        },
    });
}

export default TopAppBarMenuItem;
