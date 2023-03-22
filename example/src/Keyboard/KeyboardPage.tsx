import React, { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Keyboard, Screen, TextInput, useTheme } from 'smartway-react-native-ui';

interface Inputs {
    upperInput: string;
    bottomInput: string;
}

export const KeyboardPage = () => {
    const theme = useTheme();

    const [focusedInput, setFocusedInput] = useState<string>('');
    const [inputValues, setValues] = useState<Inputs>({ upperInput: '', bottomInput: '' });

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.sw.colors.neutral[50],
        },
    });

    return (
        <>
            <Screen style={styles.container}>
                <TextInput
                    onFocus={() => setFocusedInput('upperInput')}
                    showSoftInputOnFocus={false}
                    value={inputValues.upperInput}
                    textType={'information'}
                />
                <TextInput
                    showSoftInputOnFocus={false}
                    value={inputValues.bottomInput}
                    onFocus={() => setFocusedInput('bottomInput')}
                    textType={'information'}
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
