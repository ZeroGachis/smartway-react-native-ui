import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as FieldBase, TextInput } from 'react-native-paper';
import { useTheme } from 'smartway-react-native-ui';

type FieldBaseProps = React.ComponentProps<typeof FieldBase>;
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
            width: props?.size === 's' ? 43 : 72,
            height: props?.size === 's' ? 21 : 38,
            paddingVertical: props?.size === 's' ? 8 : 6,
            fontSize: props?.size === 's' ? 18 : 32,
        },
        content: {
            textAlign: 'center',
            color: textColor,
            paddingVertical: 0,
            paddingHorizontal: 0,
            fontStyle: 'normal',
            fontFamily: 'Public-Sans',
            fontWeight: '700',
            alignItems: 'center',
        },
        outline: {
            width: props?.size === 's' ? 43 : 72,
            borderRadius: props?.size === 's' ? 10 : 18,
            height: props?.size === 's' ? 37 : 50,
            borderWidth: borderColor ? 1 : 0,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
        },
    });
    return (
        <TextInput
            {...props}
            style={[style.input, props.style]}
            outlineStyle={style.outline}
            contentStyle={style.content}
            keyboardType="number-pad"
            textAlign={'center'}
        />
    );
};
