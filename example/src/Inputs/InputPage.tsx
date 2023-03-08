import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Screen, TextInput } from 'smartway-react-native-ui';

export const InputsPage = () => {
    const [value, setValue] = useState('');

    const handleChangeValue = (value: string) => {
        setValue(value);
    };

    return (
        <Screen style={styles.container}>
            <TextInput
                label={'Label'}
                informationText={'Information txt'}
                value={value}
                onChangeText={handleChangeValue}
            />
            <TextInput label={'Label'} informationText={'Information txt'} value={'placeholder'} />
            <TextInput
                isError
                errorMessage="Error text with icon"
                label={'Label'}
                value={'placeholder'}
                informationText={'Information txt'}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        backgroundColor: 'white',
    },
});
