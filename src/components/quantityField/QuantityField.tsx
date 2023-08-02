import React from 'react';
import { StyleSheet, TextInput, TextInputBase } from 'react-native';
import { useTheme } from 'smartway-react-native-ui';

type FieldBaseProps = React.ComponentProps<typeof TextInputBase>;
interface QuantityFieldProps extends FieldBaseProps {
    state?: 'readonly' | 'filled' | 'prefilled' | 'filled-focused' | 'prefilled-focused' | 'error';
    size?: 'm' | 's';
}

export const QuantityField = (props: QuantityFieldProps) => {
    const theme = useTheme();

    let borderColor = undefined;
    let textColor = undefined;
    let backgroundColor = undefined;
    switch (props.state) {
        case 'prefilled':
            textColor = theme.sw.colors.neutral[500];
            backgroundColor = theme.sw.colors.neutral[500] + theme.sw.transparency[8];
            break;
        case 'filled-focused':
            borderColor = theme.sw.colors.primary.main;
            break;
        case 'prefilled-focused':
            textColor = theme.sw.colors.primary.main;
            borderColor = theme.sw.colors.primary.main;
            backgroundColor = theme.sw.colors.primary.main + theme.sw.transparency[16];
            break;
        case 'filled':
            backgroundColor = theme.sw.colors.neutral[500] + theme.sw.transparency[8];
            break;
        case 'error':
            textColor = theme.sw.colors.error.main;
            backgroundColor = theme.sw.colors.error.main + theme.sw.transparency[8];
            break;
        case undefined:
            break;
    }

    const style = StyleSheet.create({
        input: {
            borderRadius: props?.size === 's' ? 10 : 18,
            height: props?.size === 's' ? 38 : 48,
            borderWidth: borderColor ? 1 : 0,
            borderColor: borderColor,

            width: props?.size === 's' ? 43 : 72,

            color: textColor,
            fontStyle: 'normal',
            fontFamily: 'Public-Sans',
            fontWeight: '700',
            fontSize: props?.size === 's' ? 18 : 32,
            lineHeight: props?.size === 's' ? 38 : 48,
            backgroundColor: backgroundColor,
            paddingVertical: 0,
            marginVertical: 0,
        },
    });
    return (
        <TextInput
            {...props}
            style={[style.input, props.style]}
            selectTextOnFocus={true}
            selectionColor={theme.sw.colors.primary.main + theme.sw.transparency[16]}
            keyboardType="number-pad"
            textAlign={'center'}
        />
    );
};
