import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { Menu as BaseMenu } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';

type MenuOption = {
    title: string;
    onPress: () => void;
};

export interface MenuProps {
    menuVisible: boolean;
    onMenuPress: () => void;
    onMenuDismiss: () => void;
    menuOptions: MenuOption[];
    menuIcon: IconName;
    menuIconSize?: number;
    menuIconColor?: string;
    menuStyle?: ViewStyle;
    menuContainerStyle?: ViewStyle;
    menuOptionStyle?: ViewStyle;
}

export const Menu = ({
    menuVisible,
    onMenuPress,
    onMenuDismiss,
    menuOptions,
    menuIcon,
    menuIconSize = 24,
    menuIconColor,
    menuStyle,
    menuContainerStyle,
    menuOptionStyle,
}: MenuProps) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            ...menuContainerStyle,
        },
        menu: {
            paddingVertical: theme.sw.spacing.l,
            backgroundColor: theme.sw.colors.neutral[50],
            borderRadius: 8,
            ...menuStyle,
        },
        option: {
            paddingHorizontal: theme.sw.spacing.l,
            ...menuOptionStyle,
        },
    });

    return (
        <View style={styles.container}>
            <BaseMenu
                anchorPosition="bottom"
                visible={menuVisible}
                onDismiss={onMenuDismiss}
                contentStyle={styles.menu}
                anchor={
                    <Pressable hitSlop={8} onPress={onMenuPress}>
                        <Icon color={menuIconColor} size={menuIconSize} name={menuIcon} />
                    </Pressable>
                }
            >
                {menuOptions.map((option: MenuOption, index: number) => (
                    <BaseMenu.Item
                        style={styles.option}
                        key={index}
                        onPress={option.onPress}
                        title={option.title}
                    />
                ))}
            </BaseMenu>
        </View>
    );
};
