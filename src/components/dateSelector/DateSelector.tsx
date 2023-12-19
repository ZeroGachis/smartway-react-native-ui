import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';
import { Theme, useTheme } from '../../styles/themes';
import { Headline } from '../typography/Headline';
import { DateField } from './DateField';

function getStyles(theme: Theme) {
    return StyleSheet.create({
        dateSelector: {
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
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
    });
}

interface DateSelectorProps {
    initialDate: Date;
}

const field = initField();

export const DateSelector = ({ initialDate }: DateSelectorProps) => {
    const theme = useTheme();
    const styles = getStyles(theme);

    const { refMonth, refYear, focus, blur } = useDateRef();

    const {
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
        intitialDay,
        initialMonth,
        initialYear,
    } = useDate(initialDate);

    type SetDateFieldState = typeof setDay | typeof setYear | typeof setMonth;

    const handleBlur =
        (setDateField: SetDateFieldState, { fallback }: { fallback: string }) =>
        () => {
            setDateField((value) => {
                if (value === '') {
                    return fallback;
                }

                return applyPaddingZeroFromTheStart(value);
            });
        };

    const handleChange: (
        setDateField: SetDateFieldState,
        {
            isValueFullFilled,
            onFocusOut,
        }: {
            isValueFullFilled: (value: string) => boolean;
            onFocusOut: () => void;
        },
    ) => TextInputProps['onChangeText'] =
        (setDateField, { isValueFullFilled, onFocusOut }) =>
        (value) => {
            setDateField(value);

            if (isValueFullFilled(value)) {
                onFocusOut();
            }
        };

    const handleDayChange = handleChange(setDay, {
        isValueFullFilled: field.day.isFullFilled,
        onFocusOut() {
            focus(refMonth);
        },
    });

    const handleMonthChange = handleChange(setMonth, {
        isValueFullFilled: field.month.isFullFilled,
        onFocusOut() {
            focus(refYear);
        },
    });

    const handleYearChange = handleChange(setYear, {
        isValueFullFilled: field.year.isFullFilled,
        onFocusOut() {
            blur(refYear);
        },
    });

    return (
        <View style={styles.dateSelector}>
            <DateField
                testID='day'
                value={day}
                returnKeyType='next'
                onSubmitEditing={() =>
                    field.day.isFilled(day) && focus(refMonth)
                }
                onChangeText={handleDayChange}
                onBlur={handleBlur(setDay, { fallback: intitialDay })}
            />
            <View style={styles.slashContainer}>
                <Headline size='h4' style={styles.slash}>
                    /
                </Headline>
            </View>
            <DateField
                testID='month'
                ref={refMonth}
                value={month}
                returnKeyType='next'
                onSubmitEditing={() =>
                    field.month.isFilled(month) && focus(refYear)
                }
                onChangeText={handleMonthChange}
                onBlur={handleBlur(setMonth, { fallback: initialMonth })}
            />
            <View style={styles.slashContainer}>
                <Headline size='h4' style={styles.slash}>
                    /
                </Headline>
            </View>
            <DateField
                testID='year'
                ref={refYear}
                value={year}
                onChangeText={handleYearChange}
                onBlur={handleBlur(setYear, { fallback: initialYear })}
            />
        </View>
    );
};

const applyPaddingZeroFromTheStart = (value: string) => {
    const MAX_CHAR_LENGTH = 2;
    const PREFIX = '0';
    return value.padStart(MAX_CHAR_LENGTH, PREFIX);
};

const useDate = (initialDate: Date) => {
    const intitialDay = applyPaddingZeroFromTheStart(
        initialDate.getDate().toString(),
    );

    const initialMonth = applyPaddingZeroFromTheStart(
        (initialDate.getMonth() + 1).toString(),
    );

    const initialYear = applyPaddingZeroFromTheStart(
        initialDate.getFullYear().toString().substring(2),
    );

    const [day, setDay] = useState(intitialDay);

    const [month, setMonth] = useState(initialMonth);

    const [year, setYear] = useState(initialYear);

    return {
        intitialDay,
        initialMonth,
        initialYear,
        day,
        setDay,
        month,
        setMonth,
        year,
        setYear,
    };
};

const useDateRef = () => {
    const refMonth = useRef<TextInput>(null);
    const refYear = useRef<TextInput>(null);

    const trigger =
        (action: 'blur' | 'focus') =>
        (ref: typeof refMonth | typeof refYear) => {
            if (ref.current) {
                ref.current[action]();
            }
        };

    return {
        refMonth,
        refYear,
        focus: trigger('focus'),
        blur: trigger('blur'),
    };
};

function initField() {
    const isFilled = (value: string) => {
        return value.length >= 0;
    };

    const isFullFilled = (value: string) => {
        return value.length === 2;
    };

    const day = {
        isFilled,
        isFullFilled,
    };

    const month = {
        isFilled,
        isFullFilled,
    };

    const year = {
        isFullFilled,
    };

    return {
        day,
        month,
        year,
    };
}
