import React, { PropsWithChildren } from 'react';
import {
    StyleProp,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import { Dialog as BaseDialog, Portal } from 'react-native-paper';
import { Button } from '../buttons/Button';
import { Headline } from '../typography/Headline';
import { DialogIcon, DialogIconProps } from './DialogIcon';
import { useTheme } from '../../styles/themes';

interface Action {
    label: string;
    onPress: () => void;
}

interface DialogActions {
    confirm: Action;
    cancel?: Action;
}

export interface DialogProps extends PropsWithChildren {
    visible: boolean;
    style?: ViewStyle;
    titleStyle?: TextStyle;
    actionsStyle?: ViewStyle;
    title?: string;
    icon?: DialogIconProps;
    variant?: 'left' | 'center';
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
            paddingHorizontal: '5%',
            paddingVertical: '5%',
            marginTop: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '80%',
            maxWidth: 500,
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
                {props.icon && (
                    <DialogIcon
                        name={props.icon.name}
                        color={props.icon.color ? props.icon.color : undefined}
                    />
                )}
                <BaseDialog.Title testID={'PopupTitle'}>
                    <Headline size='h4' style={titleStyle}>
                        {props.title}
                    </Headline>
                </BaseDialog.Title>
                <BaseDialog.Content>{props.children}</BaseDialog.Content>
                <View style={styles.actions}>
                    {props.actions.cancel && (
                        <Button
                            variant='text'
                            onPress={props.actions.cancel.onPress}
                            testID={'PopupDismissButton'}
                            style={styles.leftOption}
                        >
                            {props.actions.cancel.label}
                        </Button>
                    )}
                    <Button
                        variant='filled'
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
