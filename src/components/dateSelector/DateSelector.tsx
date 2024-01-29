import {
    StyleSheet,
    TextInput,
    View,
    Keyboard,
    KeyboardEventListener,
} from 'react-native';
import { DateField } from './DateField';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Theme, useTheme } from '../../styles/themes';
import { Headline } from '../typography/Headline';
import { Body } from '../typography/Body';
import { WithTestID } from 'src/shared/type';

type DateSelectorProps = WithTestID<{
    prefilled: Date;
    errorMessage?: string;
    onChange: (date: Date) => void;
}>;

interface FieldsValues {
    dayField: string;
    monthField: string;
    yearField: string;
}

const MAX_DATE_FIELD_LENGTH = 2;

export const DateSelector = ({
    prefilled,
    errorMessage,
    onChange,
    testID,
}: DateSelectorProps) => {
    const theme = useTheme();
    const styles = getStyles(theme);

    const [dayField, setDayField] = useState('');
    const [monthField, setMonthField] = useState('');
    const [yearField, setYearField] = useState('');

    const refDay = useRef<TextInput>(null);
    const refMonth = useRef<TextInput>(null);
    const refYear = useRef<TextInput>(null);

    const prefilledFields = fromDateToFields(prefilled);

    const leaveDateSelector = useCallback(() => {
        const completeFields = filledFieldsValues(
            prefilledFields,
            dayField,
            monthField,
            yearField,
        );

        onChange(fromFieldsToDate(completeFields));
    }, [prefilledFields, dayField, monthField, yearField, onChange]);

    useListenerOnKeyboardHiding(leaveDateSelector);

    const handleDayChange = (fieldValue: string) => {
        setDayField(fieldValue);

        if (fieldValue.length === MAX_DATE_FIELD_LENGTH) {
            refMonth.current?.focus();
        }
    };

    const handleMonthChange = (fieldValue: string) => {
        setMonthField(fieldValue);

        if (fieldValue.length === MAX_DATE_FIELD_LENGTH) {
            refYear.current?.focus();
        }
    };

    const handleYearChange = (fieldValue: string) => {
        setYearField(fieldValue);

        if (fieldValue.length === MAX_DATE_FIELD_LENGTH) {
            hideKeyboard(refYear);
        }
    };

    const handleBlurPrefixWith0 =
        (setField: React.Dispatch<React.SetStateAction<string>>) => () => {
            setField((value) => {
                if (value.length === 1) {
                    return prefixWith0(Number(value));
                }
                return value;
            });
        };

    return (
        <View style={styles.root}>
            <View style={styles.dateSelector} testID={testID}>
                <DateField
                    ref={refDay}
                    testID={testID + '/day'}
                    placeholder={prefilledFields.dayField}
                    value={dayField}
                    onBlur={handleBlurPrefixWith0(setDayField)}
                    onChangeText={handleDayChange}
                />
                <View style={styles.slashContainer}>
                    <Headline size='h4' style={styles.slash}>
                        /
                    </Headline>
                </View>
                <DateField
                    ref={refMonth}
                    testID={testID + '/month'}
                    placeholder={prefilledFields.monthField}
                    value={monthField}
                    onBlur={handleBlurPrefixWith0(setMonthField)}
                    onChangeText={handleMonthChange}
                />
                <View style={styles.slashContainer}>
                    <Headline size='h4' style={styles.slash}>
                        /
                    </Headline>
                </View>
                <DateField
                    ref={refYear}
                    testID={testID + '/year'}
                    placeholder={prefilledFields.yearField}
                    value={yearField}
                    onBlur={handleBlurPrefixWith0(setYearField)}
                    onChangeText={handleYearChange}
                />
            </View>
            {errorMessage && (
                <Body testID='text/error-message' style={styles.errorMessage}>
                    {errorMessage}
                </Body>
            )}
        </View>
    );
};

function useListenerOnKeyboardHiding(listener: KeyboardEventListener) {
    useEffect(() => {
        const hideSubscription = Keyboard.addListener(
            'keyboardDidHide',
            listener,
        );
        return () => {
            hideSubscription.remove();
        };
    }, [listener]);
}

function hideKeyboard(ref: React.RefObject<TextInput>) {
    ref?.current?.blur();
}

function fromDateToFields(date: Date): FieldsValues {
    const day = prefixWith0(date.getDate());
    const month = prefixWith0(date.getMonth() + 1); // Months are 0-based in JS
    const year = getLast2Number(date.getFullYear());
    return {
        dayField: day,
        monthField: month,
        yearField: year,
    };
}

function prefixWith0(value: number) {
    return value.toString().padStart(MAX_DATE_FIELD_LENGTH, '0');
}

function getLast2Number(value: number) {
    return value.toString().slice(2);
}

function fromFieldsToDate(fieldsValues: FieldsValues) {
    const [day, month, year] = [
        parseInt(fieldsValues.dayField),
        parseInt(fieldsValues.monthField),
        2000 + parseInt(fieldsValues.yearField),
    ];
    return new Date(year, month - 1, day);
}

function filledFieldsValues(
    prefilled: FieldsValues,
    dayField: string,
    monthField: string,
    yearField: string,
) {
    return {
        dayField: dayField || prefilled.dayField,
        monthField: monthField || prefilled.monthField,
        yearField: yearField || prefilled.yearField,
    };
}

function getStyles(theme: Theme) {
    return StyleSheet.create({
        root: {
            alignSelf: 'center',
            alignItems: 'center',
        },
        dateSelector: {
            flexDirection: 'row',
        },
        slashContainer: {
            width: 26,
            alignItems: 'center',
            justifyContent: 'center',
        },
        slash: {
            fontSize: 20,
            color: theme.sw.colors.neutral[500],
        },
        errorMessage: {
            marginTop: theme.sw.spacing.m,
            color: theme.sw.colors.error.main,
        },
    });
}
