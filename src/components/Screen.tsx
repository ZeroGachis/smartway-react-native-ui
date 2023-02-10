import React from 'react';
import { SafeAreaView, StyleProp, ViewStyle, StatusBar } from 'react-native';
import { useTheme } from "../styles/themes";

type Props = {
    children?: React.ReactNode;
    style?: ViewStyle;
};

export const Screen = (props: Props) => {
    const theme = useTheme();
    const style: StyleProp<ViewStyle> = {
        flex: 1,
        backgroundColor: theme.sw.colors.neutral[300],
        paddingLeft: theme.sw.spacing.m,
        paddingRight: theme.sw.spacing.m,
        ...props.style,
    };

    return <SafeAreaView style={style}>
        <StatusBar backgroundColor={theme.sw.colors.neutral[300]} barStyle="dark-content"/>
        {props.children}
    </SafeAreaView>;
};
