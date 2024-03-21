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
            color={theme.sw.color.neutral[600]}
            style={styles.button}
            // TODO: use new tokens
            size={32}
            {...props}
        />
    );
};

function useStyles(theme: Theme) {
    const isTablet = DeviceInfo.isTablet();

    return StyleSheet.create({
        button: {
            backgroundColor: theme.sw.color.neutral[300],
            borderRadius: 18,
            marginLeft: isTablet ? 12 : theme.sw.spacing.xs,
        },
    });
}

export default TopAppBarAction;
