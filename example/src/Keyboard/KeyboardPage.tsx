import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, TextInput as TextInputRN, View } from 'react-native';
import { Keyboard, Screen } from 'smartway-react-native-ui';
import type { KeyboardActions, KeyboardState } from 'src/components/keyboard/Keyboard';

interface Inputs {
    upperInput: string;
    bottomInput: string;
}

export const KeyboardPage = () => {
    const [focusedInput, setFocusedInput] = useState<string>('');
    const [value, setValue] = useState<KeyboardState>({ value: '', action: 'none' });
    const [inputValues, setValues] = useState<Inputs>({ upperInput: '', bottomInput: '' });

    const onChangeTextHandler = ({ value, action }: KeyboardState) => {
        switch (action) {
            case 'none':
                break;
            case 'type':
                setValues((prevState) => ({
                    ...prevState,
                    [focusedInput]: prevState[focusedInput as keyof Inputs] + value,
                }));
                break;
            case 'delete':
                setValues((prevState) => ({
                    ...prevState,
                    [focusedInput]: prevState[focusedInput as keyof Inputs].slice(0, -1),
                }));
                break;
            case 'submit':
                Alert.alert('You pressed submit');
        }
    };

    useEffect(() => {
        onChangeTextHandler(value);
    }, [value]);

    const styles = StyleSheet.create({
        container: {},
    });

    return (
        <>
            <Screen style={styles.container}>
                <TextInputRN
                    onFocus={() => setFocusedInput('upperInput')}
                    showSoftInputOnFocus={false}
                    style={{ borderWidth: 2, margin: 10 }}
                    value={inputValues.upperInput}
                />
                <TextInputRN
                    value={inputValues.bottomInput}
                    onFocus={() => setFocusedInput('bottomInput')}
                    showSoftInputOnFocus={false}
                    style={{ borderWidth: 2, margin: 10 }}
                />
            </Screen>
            <Keyboard setInputValue={setValue} style={{ position: 'absolute', bottom: 0 }} />
        </>
    );
};
