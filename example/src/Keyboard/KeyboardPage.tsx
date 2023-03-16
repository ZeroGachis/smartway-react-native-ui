import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Keyboard, TextInput } from 'smartway-react-native-ui';

export const KeyboardPage = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const [upperInputValue, setUpperValue] = useState<string>('');
    const [upperInputFocused, setUpperFocused] = useState(false);
    const [bottomInputFocused, setBottomFocused] = useState(false);
    const [bottomInputValue, setBottomValue] = useState<string>('');

    useEffect(() => {
        if (upperInputValue.length === 1) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [upperInputValue]);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
    });

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    showSoftInputOnFocus={false}
                    textType="information"
                    value={upperInputValue}
                    onChangeText={setUpperValue}
                    style={{ width: 60 }}
                    maxLength={1}
                    isFocused={setUpperFocused}
                />
                <TextInput
                    showSoftInputOnFocus={false}
                    textType="information"
                    value={bottomInputValue}
                    onChangeText={setBottomValue}
                    style={{ width: 60 }}
                    maxLength={1}
                    isFocused={setBottomFocused}
                />
            </View>
            <Keyboard
                inputValue={bottomInputFocused ? bottomInputValue : upperInputValue}
                setInputValue={bottomInputFocused ? setBottomValue : setUpperValue}
                onSubmit={() => console.log('You pressed submit ')}
                disabled={disabled}
                style={{ position: 'absolute', bottom: 0 }}
            />
        </>
    );
};
