import React from 'react';
import { SafeAreaView, ViewStyle, StatusBar, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../styles/themes';
import DeviceInfo from 'react-native-device-info';
import type { WithTestID } from 'src/shared/type';

type Props = WithTestID<{
    children?: React.ReactNode;
    style?: ViewStyle;
    statusBarColor?: string;
}>;

export const Screen = ({ children, style, testID, statusBarColor }: Props) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const isTablet = DeviceInfo.isTablet();

    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: theme.sw.color.neutral[0],
            marginTop: insets.top,
            paddingLeft: isTablet ? theme.sw.spacing.s : 0,
            paddingRight: isTablet ? theme.sw.spacing.s : 0,
            ...style,
        },
    });

    return (
        <SafeAreaView style={styles.screen} testID={testID}>
            <StatusBar
                translucent
                backgroundColor={
                    statusBarColor
                        ? statusBarColor
                        : theme.sw.color.neutral[0]
                }
                barStyle='dark-content'
            />
            {children}
        </SafeAreaView>
    );
};
