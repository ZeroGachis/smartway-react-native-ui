import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput as TextInputRN } from 'react-native';
import { Keyboard, Screen } from 'smartway-react-native-ui';

interface Inputs {
    upperInput: string;
    bottomInput: string;
}

export const KeyboardPage = () => {
    const [focusedInput, setFocusedInput] = useState<string>('');
    const [inputValues, setValues] = useState<Inputs>({ upperInput: '', bottomInput: '' });

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
                    showSoftInputOnFocus={false}
                    value={inputValues.bottomInput}
                    onFocus={() => setFocusedInput('bottomInput')}
                    style={{ borderWidth: 2, margin: 10 }}
                />
                <Keyboard
                    style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}
                    height={200}
                    focusedInput={focusedInput}
                    setValues={setValues}
                    onSubmit={() => Alert.alert(inputValues.bottomInput, inputValues.upperInput)}
                />
            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});
