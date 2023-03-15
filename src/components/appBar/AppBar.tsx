import React from 'react';
import { StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import { Appbar as BaseAppBar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Menu, MenuProps } from '../menu/Menu';
import { Headline } from '../typography/Headline';

interface Props extends MenuProps {
    headLineText: string;
    onPress: () => void;
    iconName?: string;
    appBarStyle?: ViewStyle;
}
export const AppBar = ({
    headLineText,
    onPress,
    iconName = 'arrow-left',
    appBarStyle,
    ...props
}: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        header: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: theme.sw.colors.neutral[50],
        },
        appBarStyle: {
            ...appBarStyle,
        },
        appBar: {
            backgroundColor: theme.sw.colors.neutral[50],
        },
        menu: {
            paddingRight: theme.sw.spacing.m,
        },
    });
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor={theme.sw.colors.neutral[50]} barStyle={'dark-content'} />
            <BaseAppBar style={styles.appBar}>
                <BaseAppBar.Action
                    style={styles.appBarStyle}
                    color={theme.sw.colors.neutral[800]}
                    size={theme.sw.spacing.l}
                    icon={iconName}
                    onPress={onPress}
                />
                <Headline size="h3">{headLineText}</Headline>
            </BaseAppBar>
            <Menu {...props} />
        </View>
    );
};
