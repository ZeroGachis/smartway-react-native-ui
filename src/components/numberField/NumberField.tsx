import React from 'react';
import { TextInput, StyleSheet, TextInputBase } from 'react-native';
import { useTheme } from '../../styles/themes';
import { NumberValidator } from './NumberValidator';

type FieldBaseProps = React.ComponentProps<typeof TextInputBase>;
export type FieldState = 'filled' | 'filledWithDefault';

export interface NumberFieldProps extends FieldBaseProps {
    error: boolean;
    fieldState: FieldState;
    focused: boolean;
    size?: 'm' | 's';
    validator?: NumberValidator;
    onValueChange?: (value: any) => void;
}

export const NumberField = React.forwardRef<TextInput, NumberFieldProps>(
    (
        { error, fieldState, focused, size = 'm', ...props }: NumberFieldProps,
        ref,
    ) => {
        const theme = useTheme();

        const getCurrentState = () => {
            if (error) return 'error';
            else if (fieldState === 'filledWithDefault') {
                if (focused) return 'prefilled-focused';
                else return 'prefilled';
            } else if (fieldState === 'filled') {
                if (focused) return 'filled-focused';
                else return 'filled';
            }
            return 'prefilled';
        };

        const stateStyle = () => {
            let borderColor = undefined;
            let textColor = undefined;
            let backgroundColor = undefined;
            switch (getCurrentState()) {
                case 'prefilled':
                    textColor = theme.sw.colors.neutral[500];
                    borderColor = undefined;
                    backgroundColor = theme.sw.colors.neutral[200];
                    break;
                case 'filled-focused':
                    textColor = theme.sw.colors.neutral[800];
                    backgroundColor = theme.sw.colors.neutral[50];
                    borderColor = theme.sw.colors.primary.main;
                    break;
                case 'prefilled-focused':
                    textColor = theme.sw.colors.primary.main;
                    borderColor = theme.sw.colors.primary.main;
                    backgroundColor =
                        theme.sw.colors.primary.main +
                        theme.sw.transparency[16];
                    break;
                case 'filled':
                    textColor = theme.sw.colors.neutral[800];
                    borderColor = undefined;
                    backgroundColor =
                        theme.sw.colors.neutral[500] + theme.sw.transparency[8];
                    break;
                case 'error':
                    textColor = theme.sw.colors.error.main;
                    borderColor = undefined;
                    backgroundColor =
                        theme.sw.colors.error.main + theme.sw.transparency[8];
                    break;
                case undefined:
                    break;
            }

            const style = StyleSheet.create({
                input: {
                    borderRadius: size === 's' ? 10 : 18,
                    height: size === 's' ? 38 : 48,
                    borderWidth: borderColor !== undefined ? 1 : 0,
                    borderColor: borderColor,
                    maxWidth: size === 's' ? 80 : 128,
                    color: textColor,
                    fontStyle: 'normal',
                    fontFamily: 'PublicSans-Bold',
                    fontSize: size === 's' ? 18 : 20,
                    lineHeight: size === 's' ? 38 : 48,
                    backgroundColor: backgroundColor,
                    paddingVertical: 0,
                    marginVertical: 0,
                },
            });
            return style.input;
        };
        return (
            <TextInput
                {...props}
                ref={ref ?? undefined}
                style={[stateStyle(), props.style]}
                selectionColor={
                    theme.sw.colors.primary.main + theme.sw.transparency[16]
                }
                cursorColor={theme.sw.colors.primary.main}
                keyboardType='number-pad'
                textAlign={'center'}
            />
        );
    },
);

NumberField.displayName = 'NumberField';
