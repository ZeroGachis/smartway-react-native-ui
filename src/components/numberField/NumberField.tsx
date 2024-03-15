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
                    textColor = theme.sw.color.neutral[500];
                    borderColor = undefined;
                    backgroundColor = theme.sw.color.neutral[200];
                    break;
                case 'filled-focused':
                    textColor = theme.sw.color.neutral[800];
                    backgroundColor = theme.sw.color.neutral[0];
                    borderColor = theme.sw.color.primary[500];
                    break;
                case 'prefilled-focused':
                    textColor = theme.sw.color.primary[500];
                    borderColor = theme.sw.color.primary[500];
                    backgroundColor =
                        theme.sw.color.primary[500] +
                        // TODO: use new tokens
                        '29';
                    break;
                case 'filled':
                    textColor = theme.sw.color.neutral[800];
                    borderColor = undefined;
                    backgroundColor = theme.sw.color.neutral[200];
                    break;
                case 'error':
                    textColor = theme.sw.color.error[500];
                    borderColor = undefined;
                    backgroundColor =
                        // TODO: use new tokens
                        theme.sw.color.error[500] + '14';
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
                    // TODO: use new tokens
                    theme.sw.color.primary[500] + '29'
                }
                cursorColor={theme.sw.color.primary[500]}
                keyboardType='number-pad'
                textAlign={'center'}
            />
        );
    },
);

NumberField.displayName = 'NumberField';
