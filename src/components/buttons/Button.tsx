import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonBase } from 'react-native-paper';
import { useTheme } from '../../styles/themes';

type ButtonProps = React.ComponentProps<typeof ButtonBase>;
interface customButtonProps extends ButtonProps {
    scale?: 's' | 'm';
    status?: 'primary' | 'default';
}
export const Button = (buttonProps: customButtonProps) => {
    const theme = useTheme();
    const style = StyleSheet.create({
        button: {
            borderRadius: buttonProps?.scale === 's' ? 14 : 18,
        },
        label: {
            marginVertical: buttonProps?.scale === 's' ? 6 : 11,
            marginHorizontal: buttonProps?.scale === 's' ? 16 : 22,
            lineHeight: buttonProps?.scale === 's' ? 24 : 26,
            fontSize: buttonProps?.scale === 's' ? 14 : 16,
            fontWeight: '700',
        },
    });
    let customStyle = undefined;
    if (
        (buttonProps.mode === 'text' || buttonProps.mode === 'outlined') &&
        buttonProps.status === 'primary'
    ) {
        customStyle = StyleSheet.create({
            button: {
                borderColor: theme.colors.secondaryContainer,
                backgroundColor: '#ffffff',
            },
            label: {
                color: theme.colors.secondaryContainer,
            },
        });
    }
    if (
        buttonProps.mode === 'outlined' &&
        (buttonProps.status === undefined || buttonProps.status === 'default')
    ) {
        customStyle = StyleSheet.create({
            button: {
                borderColor: buttonProps.disabled
                    ? theme.sw.colors.neutral[500] + theme.sw.transparency[24]
                    : theme.sw.colors.neutral[800] + theme.sw.transparency[48],
            },
            label: {},
        });
    }
    return (
        <ButtonBase
            mode={buttonProps.mode ?? 'contained'}
            {...buttonProps}
            style={[style.button, buttonProps.style, customStyle ? customStyle.button : {}]}
            labelStyle={[style.label, buttonProps.labelStyle, customStyle ? customStyle.label : {}]}
        />
    );
};
