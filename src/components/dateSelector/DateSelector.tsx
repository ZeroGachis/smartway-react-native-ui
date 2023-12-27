import { StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { DateField } from './DateField';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Theme, useTheme } from '../../styles/themes';
import { Headline } from '../typography/Headline';

interface DateSelectorProps {
    prefilled: Date;
    onChange: (date: Date) => void;
    testID?: string;
}

interface FieldsValues {
    firstField: string;
    secondField: string;
    thirdField: string;
}

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

export const DateSelector = ({
    prefilled,
    onChange,
    testID,
}: DateSelectorProps) => {
    const theme = useTheme();
    const styles = getStyles(theme);

    const [firstField, setFirstField] = useState('');
    const [secondField, setSecondField] = useState('');
    const [thirdField, setThirdField] = useState('');

    const refYear = useRef<TextInput>(null);

    const prefilledFields = fromDateToFields(prefilled);

    const leaveDateSelector = useCallback(() => {
        const completeFields = filledFieldsValues(
            prefilledFields,
            firstField,
            secondField,
            thirdField,
        );

        onChange(fromFieldsToDate(completeFields));
    }, [prefilledFields, firstField, secondField, thirdField, onChange]);

    useEffect(() => {
        const hideSubscription = Keyboard.addListener(
            'keyboardDidHide',
            leaveDateSelector,
        );
        return () => {
            hideSubscription.remove();
        };
    }, [leaveDateSelector]);

    const handleYearChange = (fieldValue: string) => {
        setThirdField(fieldValue);

        if (fieldValue.length === 2) {
            refYear?.current?.blur();
        }
    };

    return (
        <View style={styles.dateSelector} testID={testID}>
            <DateField
                testID={testID + '/first'}
                placeholder={prefilledFields.firstField}
                value={firstField}
                onChangeText={setFirstField}
            />
            <View style={styles.slashContainer}>
                <Headline size='h4' style={styles.slash}>
                    /
                </Headline>
            </View>
            <DateField
                testID={testID + '/second'}
                placeholder={prefilledFields.secondField}
                value={secondField}
                onChangeText={setSecondField}
            />
            <View style={styles.slashContainer}>
                <Headline size='h4' style={styles.slash}>
                    /
                </Headline>
            </View>
            <DateField
                ref={refYear}
                testID={testID + '/third'}
                placeholder={prefilledFields.thirdField}
                value={thirdField}
                onChangeText={handleYearChange}
            />
        </View>
    );
};

function fromDateToFields(date: Date): FieldsValues {
    const day = prefixWith0(date.getDate());
    const month = prefixWith0(date.getMonth() + 1); // Months are 0-based in JS
    const year = getLast2Number(date.getFullYear());
    return {
        firstField: day,
        secondField: month,
        thirdField: year,
    };
}

function prefixWith0(value: number) {
    return value.toString().padStart(2, '0');
}

function getLast2Number(value: number) {
    return value.toString().slice(2);
}

function fromFieldsToDate(fieldsValues: FieldsValues) {
    const [day, month, year] = [
        parseInt(fieldsValues.firstField),
        parseInt(fieldsValues.secondField),
        2000 + parseInt(fieldsValues.thirdField),
    ];
    return new Date(year, month - 1, day);
}

function filledFieldsValues(
    prefilled: FieldsValues,
    firstField: string,
    secondField: string,
    thirdField: string,
) {
    return {
        firstField: firstField || prefilled.firstField,
        secondField: secondField || prefilled.secondField,
        thirdField: thirdField || prefilled.thirdField,
    };
}
