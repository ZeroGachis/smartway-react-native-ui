import React from 'react';
import { Snackbar as ReactNativePaperSnackbar } from 'react-native-paper';
import Alert, { AlertProps, useAlert } from './Alert';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../src/styles/themes';

export interface SnackbarProps extends Omit<AlertProps, 'style'> {
    visible: boolean;
    duration?: number;
}

const Snackbar = ({
    visible,
    onDismiss,
    title,
    description,
    status,
    duration = 7000,
}: SnackbarProps) => {
    const style = useSnackbarStyles(status);
    return (
        <ReactNativePaperSnackbar
            duration={duration}
            visible={visible}
            onDismiss={onDismiss}
            style={style.snackbar}
        >
            <Alert
                onDismiss={onDismiss}
                status={status}
                title={title}
                description={description}
                style={style.alert}
            />
        </ReactNativePaperSnackbar>
    );
};

function useSnackbarStyles(status: AlertProps['status']) {
    const theme = useTheme();
    return StyleSheet.create({
        snackbar: {
            backgroundColor: theme.sw.color[status][100],
        },
        alert: {
            padding: 0,
        },
    });
}

export const useSnackbar = useAlert;

export default Snackbar;
