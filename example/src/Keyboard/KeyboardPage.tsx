import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Keyboard, TextInput } from 'smartway-react-native-ui';

export const KeyboardPage = () => {
    const [upperInputValue, setUpperValue] = useState<string>('');
    const [upperInputFocused, setUpperFocused] = useState(false);
    const [bottomInputFocused, setBottomFocused] = useState(false);
    const [bottomInputValue, setBottomValue] = useState<string>('');

    const styles = StyleSheet.create({
        container: {
            padding: 16,
        },
    });

    return (
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
            <Keyboard
                inputValue={bottomInputFocused ? bottomInputValue : upperInputValue}
                setInputValue={bottomInputFocused ? setBottomValue : setUpperValue}
            />
        </View>
    );
};
