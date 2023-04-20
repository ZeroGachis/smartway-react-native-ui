import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Dialog as BaseDialog, Portal } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Button } from '../buttons/Button';
import { Body } from '../typography/Body';
import { Headline } from '../typography/Headline';

interface DialogProps {
    visible: boolean;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    contentStyle?: ViewStyle;
    actionsStyle?: ViewStyle;
    title: string;
    content: string;
    dismissButtonLabel?: string;
    confirmButtonLabel: string;
    onDismiss?: () => void;
    onConfirm: () => void;
}

export const Dialog = (props: DialogProps) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        dialog: {
            borderRadius: theme.sw.spacing.l,
            padding: theme.sw.spacing.l,
            paddingTop: theme.sw.spacing.xl,
            marginTop: 0,
            backgroundColor: theme.sw.colors.neutral[50],
            ...props.style,
        },
        title: {
            marginBottom: theme.sw.spacing.l,
            ...props.titleStyle,
        },
        content: {
            marginBottom: theme.sw.spacing.l,
            color: theme.sw.colors.neutral[600],
            ...props.contentStyle,
        },
        actions: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            ...props.actionsStyle,
        },
        leftOption: {
            color: theme.sw.colors.neutral[800],
            fontWeight: 'bold',
            marginRight: theme.sw.spacing.m,
        },
        rightOption: {
            flex: props.dismissButtonLabel ? 0 : 1,
        },
    });

    return (
        <Portal>
            <BaseDialog
                theme={{ colors: { backdrop: '#1A2026B2' } }}
                visible={props.visible}
                onDismiss={props.onDismiss}
            >
                <View style={styles.dialog}>
                    <Headline size="h3" style={styles.title} testID={'PopupTitle'}>
                        {props.title}
                    </Headline>
                    <Body style={styles.content}>{props.content}</Body>
                    <View style={styles.actions}>
                        {props.onDismiss && props.dismissButtonLabel && (
                            <Button
                                labelStyle={styles.leftOption}
                                mode="text"
                                onClick={props.onDismiss}
                                testID={'PopupDismissButton'}
                            >
                                {props.dismissButtonLabel}
                            </Button>
                        )}

                        <Button
                            mode="filled"
                            onClick={props.onConfirm}
                            testID={'PopupConfirmButton'}
                            style={styles.rightOption}
                        >
                            {props.confirmButtonLabel}
                        </Button>
                    </View>
                </View>
            </BaseDialog>
        </Portal>
    );
};
