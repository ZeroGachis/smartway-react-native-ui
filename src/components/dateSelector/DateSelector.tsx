import { StyleSheet, TextInput, View } from 'react-native';
import { DateField } from './DateField';
import React, { useCallback, useRef, useState } from 'react';
import { Theme, useTheme } from '../../styles/themes';
import { Headline } from '../typography/Headline';
import { Body } from '../typography/Body';
import { WithTestID } from 'src/shared/type';
import {
    hideKeyboard,
    useListenerOnKeyboardHiding,
} from '../../shared/keyboardUtils';

type DateSelectorProps = WithTestID<{
    prefilled: Date;
    errorMessage?: string;
    onUpdatedDate: (date: Date | RangeError) => void;
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
    onUpdatedDate,
    testID,
}: DateSelectorProps) => {
    const theme = useTheme();
    const styles = getStyles(theme);

    const [dayField, setDayField] = useState('');
    const [monthField, setMonthField] = useState('');
    const [yearField, setYearField] = useState('');
    const [displayError, setDisplayError] = useState(!!errorMessage);

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

        setDayField(completeFields.dayField);
        setMonthField(completeFields.monthField);
        setYearField(completeFields.yearField);
        setDisplayError(!!errorMessage);

        onUpdatedDate(fromFieldsToDate(completeFields));
    }, [
        prefilledFields,
        dayField,
        monthField,
        yearField,
        errorMessage,
        onUpdatedDate,
    ]);

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

    const handleOnFocus = () => setDisplayError(false);

    return (
        <View style={styles.root}>
            <View style={styles.dateSelector} testID={testID}>
                <DateField
                    ref={refDay}
                    testID={testID + '/day'}
                    placeholder={prefilledFields.dayField}
                    value={dayField}
                    hasError={displayError}
                    onBlur={handleBlurPrefixWith0(setDayField)}
                    onChangeText={handleDayChange}
                    onFocus={handleOnFocus}
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
                    hasError={displayError}
                    onBlur={handleBlurPrefixWith0(setMonthField)}
                    onChangeText={handleMonthChange}
                    onFocus={handleOnFocus}
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
                    hasError={displayError}
                    onBlur={handleBlurPrefixWith0(setYearField)}
                    onChangeText={handleYearChange}
                    onFocus={handleOnFocus}
                />
            </View>
            {displayError && errorMessage && (
                <Body testID='text/error-message' style={styles.errorMessage}>
                    {errorMessage}
                </Body>
            )}
        </View>
    );
};

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

    const date = new Date(`${year}-${month}-${day}`);

    const isDateExist =
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        date.getFullYear() === year;

    if (!isDateExist) {
        return RangeError('Invalid date');
    }

    return date;
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
