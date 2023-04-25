import React from 'react';
import { SafeAreaView, ViewStyle, StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../styles/themes';

type Props = {
    children?: React.ReactNode;
    style?: ViewStyle;
    testID?: string;
    statusBarColor?: string;
};

export const Screen = ({ children, style, statusBarColor, testID }: Props) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: theme.sw.colors.neutral[50],
            marginTop: insets.top,
            paddingLeft: theme.sw.spacing.m,
            paddingRight: theme.sw.spacing.m,
            ...style,
        },
    });

    return (
        <SafeAreaView style={styles.screen} testID={testID}>
            <StatusBar
                translucent
                backgroundColor={statusBarColor ? statusBarColor : theme.sw.colors.neutral[50]}
                barStyle="dark-content"
            />
            {children}
        </SafeAreaView>
    );
};
