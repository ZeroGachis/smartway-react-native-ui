import React, { ComponentProps } from 'react';
import { Appbar } from 'react-native-paper';
import { Theme, useTheme } from '../../styles/themes';
import DeviceInfo from 'react-native-device-info';
import { StyleSheet } from 'react-native';

type TopAppBarActionProps = ComponentProps<typeof Appbar.Action>;
const TopAppBarAction = (props: TopAppBarActionProps) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <Appbar.Action
            color={theme.sw.colors.neutral[600]}
            style={styles.button}
            size={theme.sw.iconbuttonsize.m}
            {...props}
        />
    );
};

function useStyles(theme: Theme) {
    const isTablet = DeviceInfo.isTablet();

    return StyleSheet.create({
        button: {
            backgroundColor: 'rgba(145, 158, 171, 0.24)',
            borderRadius: 18,
            marginLeft: isTablet ? 12 : theme.sw.spacing.xs,
        },
    });
}

export default TopAppBarAction;
