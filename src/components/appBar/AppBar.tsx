import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Appbar as BaseAppBar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Headline } from '../typography/Headline';

interface Props {
    text: string;
    onPress: () => void;
    iconName?: string;
    style?: ViewStyle;
    children?: JSX.Element;
}
export const AppBar = ({ text, onPress, iconName = 'arrow-left', style, children }: Props) => {
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
    });
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
                <Headline size="h3">{text}</Headline>
            </BaseAppBar>
            {children}
        </View>
    );
};
