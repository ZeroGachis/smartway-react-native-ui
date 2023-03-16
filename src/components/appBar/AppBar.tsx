import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Appbar as BaseAppBar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import { Body } from '../typography/Body';
import { Headline } from '../typography/Headline';

type AppBarType = 'default' | 'accordion';
interface Props {
    label?: string;
    onPress: () => void;
    iconName?: string;
    style?: ViewStyle;
    children?: JSX.Element;
    type?: AppBarType;
}
export const AppBar = ({
    label,
    onPress,
    iconName = 'arrow-left',
    style,
    children,
    type = 'default',
}: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        header: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: theme.sw.colors.neutral[50],
        },
        appBarStyle: {
            ...style,
        },
        appBar: {
            backgroundColor: theme.sw.colors.neutral[50],
        },
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
        },
        touchableOpacity: {
            paddingHorizontal: theme.sw.spacing.l,
            paddingVertical: theme.sw.spacing.m,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ECF0F4',
            ...style,
        },
        body: {
            fontWeight: '700',
            paddingRight: theme.sw.spacing.m,
        },
    });

    if (type === 'default') {
        return (
            <View style={styles.header}>
                <BaseAppBar style={styles.appBar}>
                    <BaseAppBar.Action
                        style={styles.appBarStyle}
                        color={theme.sw.colors.neutral[800]}
                        size={theme.sw.spacing.l}
                        icon={iconName}
                        onPress={onPress}
                    />
                    <Headline size="h3">{label}</Headline>
                </BaseAppBar>
                {children}
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
                    <Body style={styles.body}>{label}</Body>
                    <Icon name="arrow-down" />
                </TouchableOpacity>
                {children}
            </View>
        );
    }
};
