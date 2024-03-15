import React, { PropsWithChildren } from 'react';
import {
    Dimensions,
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
import DeviceInfo from 'react-native-device-info';

interface Action {
    label: string;
    disabled?: boolean;
    loading?: boolean;
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
    leftActionsStyle?: ViewStyle;
    rightActionsStyle?: ViewStyle;
    title?: string;
    icon?: DialogIconProps;
    variant?: 'left' | 'center';
    dismissable?: boolean;
    onDismiss?: () => void;
    actions: DialogActions;
}

export const Dialog = (props: DialogProps) => {
    const {
        style,
        actionsStyle,
        leftActionsStyle,
        rightActionsStyle,
        actions,
        variant,
    } = props;

    const styles = useStyles({
        style,
        actionsStyle,
        leftActionsStyle,
        rightActionsStyle,
        cancel: actions.cancel,
        variant,
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
                    <Headline size='h4' style={styles.title}>
                        {props.title}
                    </Headline>
                </BaseDialog.Title>
                <BaseDialog.Content style={styles.dialogContent}>
                    {props.children}
                </BaseDialog.Content>
                <View style={styles.actions}>
                    {props.actions.cancel && (
                        <Button
                            variant='text'
                            onPress={props.actions.cancel.onPress}
                            testID={'PopupDismissButton'}
                            style={styles.leftOption}
                            loading={props.actions.cancel.loading ?? false}
                            disabled={props.actions.cancel.disabled ?? false}
                        >
                            {props.actions.cancel.label}
                        </Button>
                    )}
                    <Button
                        variant='filled'
                        status={'primary'}
                        onPress={props.actions.confirm.onPress}
                        testID={'PopupConfirmButton'}
                        style={styles.rightOption}
                        loading={props.actions.confirm.loading ?? false}
                        disabled={props.actions.confirm.disabled ?? false}
                    >
                        {props.actions.confirm.label}
                    </Button>
                </View>
            </BaseDialog>
        </Portal>
    );
};

type UseStylesProps = Pick<
    DialogProps,
    | 'style'
    | 'actionsStyle'
    | 'leftActionsStyle'
    | 'rightActionsStyle'
    | 'variant'
> & {
    cancel: DialogProps['actions']['cancel'];
};

function useStyles({
    style,
    actionsStyle,
    leftActionsStyle,
    rightActionsStyle,
    cancel,
    variant,
}: UseStylesProps) {
    const theme = useTheme();

    const commonStyleSheet = StyleSheet.create({
        dialog: {
            borderRadius: theme.sw.borderRadius.l,
            marginTop: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: theme.sw.color.neutral[0],
            ...style,
        },
        dialogContent: {
            paddingHorizontal: 0,
        },
        title: {
            textAlign: variant ?? 'left',
            fontSize: 20,
            lineHeight: 20,
            fontFamily: 'PublicSans-Bold',
            marginTop: 0,
            marginHorizontal: 0,
        },
        actions: {
            flexDirection: 'row',
            justifyContent: cancel ? 'flex-end' : 'center',
            marginRight: 0,
            ...actionsStyle,
        },
        leftOption: {
            color: theme.sw.color.neutral[800],
            marginRight: theme.sw.spacing.xs,
            ...leftActionsStyle,
        },
        rightOption: {
            ...rightActionsStyle,
        },
    });

    const createMobileStyle = () => {
        const { width } = Dimensions.get('screen');
        return StyleSheet.create({
            dialog: {
                ...commonStyleSheet.dialog,
                paddingHorizontal: theme.sw.spacing.m,
                paddingVertical: theme.sw.spacing.m,
                width: width - theme.sw.spacing.l,
            },
            dialogContent: commonStyleSheet.dialogContent,
            title: commonStyleSheet.title,
            actions: commonStyleSheet.actions,
            leftOption: commonStyleSheet.leftOption,
            rightOption: commonStyleSheet.rightOption,
        });
    };

    const createTabletStyle = () =>
        StyleSheet.create({
            dialog: {
                ...commonStyleSheet.dialog,
                paddingHorizontal: 56,
                paddingVertical: 40,
                width: '80%',
                maxWidth: 500,
            },
            dialogContent: commonStyleSheet.dialogContent,
            title: {
                ...commonStyleSheet.title,
                marginBottom: theme.sw.spacing.m,
            },
            actions: {
                ...commonStyleSheet.actions,
                marginTop: theme.sw.spacing.m,
            },
            leftOption: commonStyleSheet.leftOption,
            rightOption: commonStyleSheet.rightOption,
        });

    return DeviceInfo.isTablet() ? createTabletStyle() : createMobileStyle();
}
