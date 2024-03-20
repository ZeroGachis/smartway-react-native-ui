import React, { useState } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { Menu as BaseMenu } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';

export type MenuOption = {
    title: string;
    onPress: () => void;
};

export interface Props {
    options: MenuOption[];
    icon: IconName;
    iconSize?: number;
    iconColor?: string;
    style?: ViewStyle;
    menuStyle?: ViewStyle;
    optionStyle?: ViewStyle;
}

export const Menu = ({
    options,
    icon,
    style,
    iconSize = 24,
    iconColor,
    menuStyle,
    optionStyle,
}: Props) => {
    const [menuVisible, setVisibility] = useState<boolean>(false);

    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            ...style,
        },
        menu: {
            paddingVertical: theme.sw.spacing.m,
            backgroundColor: theme.sw.color.neutral[0],
            borderRadius: 8,
            ...menuStyle,
        },
        option: {
            paddingHorizontal: theme.sw.spacing.m,
            ...optionStyle,
        },
    });

    return (
        <View style={styles.container}>
            <BaseMenu
                anchorPosition="bottom"
                visible={menuVisible}
                onDismiss={() => setVisibility(false)}
                contentStyle={styles.menu}
                anchor={
                    <Pressable hitSlop={8} onPress={() => setVisibility(true)}>
                        <Icon color={iconColor} size={iconSize} name={icon} />
                    </Pressable>
                }
            >
                {options.map((option: MenuOption, index: number) => (
                    <BaseMenu.Item
                        style={styles.option}
                        key={index}
                        onPress={() => {
                            option.onPress();
                            setVisibility(false);
                        }}
                        title={option.title}
                    />
                ))}
            </BaseMenu>
        </View>
    );
};
