import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, SnackBar } from 'smartway-react-native-ui';
import type { SnackBarProps } from 'src/components/snackBar/SnackBar';

export const SnackBarPage = () => {
    const [snackBarProps, setSnackBar] = useState<Omit<SnackBarProps, 'setSnackBar'>>({
        visible: false,
        message: '',
        actionLabel: '',
        iconName: undefined,
        onDismiss: undefined,
        duration: 4000,
    });

    const openSnackBar = () => {
        setSnackBar({
            visible: true,
            message: 'Placeholder text',
            actionLabel: 'Hello',
            iconName: 'add-picture',
            onDismiss: () => console.log(''),
            duration: 4000,
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Button onClick={openSnackBar}>open SnackBar</Button>
            <SnackBar {...snackBarProps} setSnackBar={setSnackBar} />
        </View>
    );
};
