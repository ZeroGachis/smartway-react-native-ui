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

interface Props {
    visible: boolean;
    onPress: () => void;
    onDismiss: () => void;
    options: MenuOption[];
    icon: IconName;
    iconSize?: number;
    iconColor?: string;
    style?: ViewStyle;
    menuStyle?: ViewStyle;
    optionStyle?: ViewStyle;
}

export const Menu = ({
    visible,
    onPress,
    onDismiss,
    options,
    icon,
    style,
    iconSize = 24,
    iconColor,
    menuStyle,
    optionStyle,
}: Props) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            ...style,
        },
        menu: {
            paddingVertical: 24,
            backgroundColor: theme.sw.colors.neutral[50],
            borderRadius: 8,
            ...menuStyle,
        },
        option: {
            paddingHorizontal: 24,
            ...optionStyle,
        },
    });

    return (
        <View style={styles.container}>
            <BaseMenu
                anchorPosition="bottom"
                visible={visible}
                onDismiss={onDismiss}
                contentStyle={styles.menu}
                anchor={
                    <Pressable hitSlop={8} onPress={onPress}>
                        <Icon color={iconColor} size={iconSize} name={icon} />
                    </Pressable>
                }
            >
                {options.map((option: MenuOption, index: number) => (
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
