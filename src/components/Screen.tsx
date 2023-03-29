import React from 'react';
import { SafeAreaView, ViewStyle, StatusBar, StyleSheet } from 'react-native';
import { useTheme } from '../styles/themes';

type Props = {
    children?: React.ReactNode;
    style?: ViewStyle;
    testID?: string;
    statusBarColor?: string;
};

export const Screen = ({ children, style, testID, statusBarColor }: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: theme.sw.colors.neutral[50],
            paddingLeft: theme.sw.spacing.m,
            paddingRight: theme.sw.spacing.m,
            ...style,
        },
    });

    return (
        <SafeAreaView style={styles.screen} testID={testID}>
            <StatusBar
                backgroundColor={statusBarColor ? statusBarColor : theme.sw.colors.neutral[50]}
                barStyle="dark-content"
            />
            {children}
        </SafeAreaView>
    );
};
