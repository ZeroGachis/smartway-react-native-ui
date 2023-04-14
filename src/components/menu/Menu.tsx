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

interface Props {
    options: MenuOption[];
    icon: IconName;
    iconSize?: number;
    iconColor?: string;
    style?: ViewStyle;
    menuStyle?: ViewStyle;
    optionStyle?: ViewStyle;
    testID?: string;
    optionTestID?: string;
}

export const Menu = ({
    options,
    icon,
    style,
    iconSize = 24,
    iconColor,
    menuStyle,
    optionStyle,
    testID,
    optionTestID,
}: Props) => {
    const [menuVisible, setVisibility] = useState<boolean>(false);

    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            ...style,
        },
        menu: {
            paddingVertical: theme.sw.spacing.l,
            backgroundColor: theme.sw.colors.neutral[50],
            borderRadius: 8,
            ...menuStyle,
        },
        option: {
            paddingHorizontal: theme.sw.spacing.l,
            ...optionStyle,
        },
    });

    return (
        <View style={styles.container}>
            <BaseMenu
                testID={testID}
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
                        testID={optionTestID}
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
