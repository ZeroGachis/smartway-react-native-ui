import React from 'react';
import { TextStyle, View, ViewStyle } from 'react-native';
import { Dialog as BaseDialog } from 'react-native-paper';
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
    dismissButtonLabel: string;
    confirmButtonLabel: string;
    onDismiss: () => void;
    onConfirm: () => void;
}

export const Dialog = (props: DialogProps) => {
    const theme = useTheme();
    const _dialogStyle: ViewStyle = {
        borderRadius: theme.sw.spacing.l,
        padding: theme.sw.spacing.l,
        marginTop: 0,
        backgroundColor: theme.sw.colors.neutral[50],
        ...props.style,
    };

    const _titleStyle: TextStyle = {
        marginBottom: theme.sw.spacing.l,
        ...props.titleStyle,
    };

    const _contentStyle: ViewStyle = {
        marginBottom: theme.sw.spacing.l,
        ...props.contentStyle,
    };

    const _actionsStyle: ViewStyle = {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        ...props.actionsStyle,
    };

    return (
        <BaseDialog visible={props.visible} onDismiss={props.onDismiss}>
            <View style={_dialogStyle}>
                <Headline size="h2" style={_titleStyle}>
                    {props.title}
                </Headline>
                <Body style={_contentStyle}>{props.content}</Body>
                <View style={_actionsStyle}>
                    <Button mode="text" onClick={props.onDismiss}>
                        {props.dismissButtonLabel}
                    </Button>
                    <Button mode="filled" onClick={props.onConfirm}>
                        {props.confirmButtonLabel}
                    </Button>
                </View>
            </View>
        </BaseDialog>
    );
};
