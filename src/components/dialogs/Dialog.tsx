import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Dialog as BaseDialog, Portal, Text } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Button } from '../buttons/Button';

interface Action {
    label: string;
    onPress: () => void;
}

interface DialogActions {
    confirm: Action;
    cancel?: Action;
}

interface DialogProps {
    visible: boolean;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    actionsStyle?: ViewStyle;
    title?: string;
    variant?: 'left' | 'center';
    children?: ReactNode;
    dismissable?: boolean;
    onDismiss?: () => void;
    actions: DialogActions;
}

export const Dialog = (props: DialogProps) => {
    const theme = useTheme();

    const titleStyle: StyleProp<TextStyle> = {
        textAlign: props.variant ?? 'left',
        fontSize: 20,
        fontFamily: 'PublicSans-Bold',
        marginBottom: theme.sw.spacing.l,
        marginTop: 0,
    };
    const styles = StyleSheet.create({
        dialog: {
            borderRadius: theme.sw.spacing.l,
            paddingHorizontal: 56,
            paddingVertical: 40,
            marginTop: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 500,
            backgroundColor: theme.sw.colors.neutral[50],
            ...props.style,
        },
        actions: {
            flexDirection: 'row',
            justifyContent: props.actions.cancel ? 'flex-end' : 'center',
            marginRight: 0,
            marginTop: theme.sw.spacing.l,
            ...props.actionsStyle,
        },
        leftOption: {
            color: theme.sw.colors.neutral[800],
            marginRight: theme.sw.spacing.xs,
        },
    });

    return (
        <Portal>
            <BaseDialog
                theme={{ colors: { backdrop: '#1A2026B2' } }}
                visible={props.visible}
                onDismiss={props?.onDismiss}
                dismissable={props.dismissable}
                style={styles.dialog}
            >
                <Text style={titleStyle}>{props.title}</Text>
                {props.children}
                <View style={styles.actions}>
                    {props.actions.cancel && (
                        <Button
                            variant="text"
                            onPress={props.actions.cancel.onPress}
                            testID={'PopupDismissButton'}
                            style={styles.leftOption}
                        >
                            {props.actions.cancel.label}
                        </Button>
                    )}
                    <Button
                        variant="filled"
                        status={'primary'}
                        onPress={props.actions.confirm.onPress}
                        testID={'PopupConfirmButton'}
                    >
                        {props.actions.confirm.label}
                    </Button>
                </View>
            </BaseDialog>
        </Portal>
    );
};
