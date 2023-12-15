import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';
import { Theme, useTheme } from '../../styles/themes';
// import { NumberField } from '../numberField/NumberField';
import { Headline } from '../typography/Headline';

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

const DateSelector = ({ initialDate }: DateSelectorProps) => {
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
            isEnteredValueValid,
            isSubmitEditedValueValid,
            onFocusOut,
        }: {
            isEnteredValueValid: (value: string) => boolean;
            isSubmitEditedValueValid: (value: string) => boolean;
            onFocusOut: () => void;
        },
    ) => TextInputProps['onChangeText'] =
        (
            setDateField,
            { isEnteredValueValid, isSubmitEditedValueValid, onFocusOut },
        ) =>
        (value) => {
            if (!isEnteredValueValid(value)) {
                return;
            }

            setDateField(value);

            if (isSubmitEditedValueValid(value)) {
                onFocusOut();
            }
        };

    const field = Field();

    const handleDayChange = handleChange(setDay, {
        isEnteredValueValid: field.day.isEnteredValueValid,
        isSubmitEditedValueValid: field.day.isHardSubmitEditedValueValid,
        onFocusOut() {
            focus(refMonth);
        },
    });

    const handleMonthChange = handleChange(setMonth, {
        isEnteredValueValid: field.month.isEnteredValueValid,
        isSubmitEditedValueValid: field.month.isHardSubmitEditedValueValid,
        onFocusOut() {
            focus(refYear);
        },
    });

    const handleYearChange = handleChange(setYear, {
        isEnteredValueValid: field.year.isEnteredValueValid,
        isSubmitEditedValueValid: field.year.isHardSubmitEditedValueValid,
        onFocusOut() {
            blur(refYear);
        },
    });

    return (
        <View style={styles.dateSelector}>
            <TextInput
                testID='day'
                value={day}
                keyboardType='number-pad'
                inputMode='numeric'
                selectTextOnFocus={true}
                returnKeyType='next'
                onSubmitEditing={() =>
                    field.day.isSoftSubmitEditedValueValid(day) &&
                    focus(refMonth)
                }
                onChangeText={handleDayChange}
                onBlur={handleBlur(setDay, { fallback: intitialDay })}
            />
            <View style={styles.slashContainer}>
                <Headline size='h4' style={styles.slash}>
                    /
                </Headline>
            </View>
            <TextInput
                testID='month'
                ref={refMonth}
                value={month}
                keyboardType='number-pad'
                inputMode='numeric'
                selectTextOnFocus={true}
                returnKeyType='next'
                onSubmitEditing={() =>
                    field.month.isSoftSubmitEditedValueValid(month) &&
                    focus(refYear)
                }
                onChangeText={handleMonthChange}
                onBlur={handleBlur(setMonth, { fallback: initialMonth })}
            />
            <View style={styles.slashContainer}>
                <Headline size='h4' style={styles.slash}>
                    /
                </Headline>
            </View>
            <TextInput
                testID='year'
                ref={refYear}
                value={year}
                keyboardType='number-pad'
                inputMode='numeric'
                selectTextOnFocus={true}
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

const Field = () => {
    const regex = /^[0-9][0-9]?$/;
    const maxLength = 2;

    const isEnteredValueValid = (value: string) => {
        if (value === '') return true;
        return regex.test(value);
    };

    const isSoftSubmitEditedValueValid = (value: string) => {
        return regex.test(value);
    };

    const isHardSubmitEditedValueValid = (value: string) => {
        return isSoftSubmitEditedDayValid(value) && value.length === maxLength;
    };

    const isSoftSubmitEditedDayValid = (value: string) => {
        return regex.test(value);
    };

    const day = {
        isEnteredValueValid,
        isSoftSubmitEditedValueValid,
        isHardSubmitEditedValueValid,
    };

    const month = {
        isEnteredValueValid,
        isSoftSubmitEditedValueValid,
        isHardSubmitEditedValueValid,
    };

    const year = {
        isEnteredValueValid,
        isHardSubmitEditedValueValid,
    };

    return {
        day,
        month,
        year,
    };
};

export default DateSelector;
