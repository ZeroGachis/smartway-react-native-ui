import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Screen, TextInput } from 'smartway-react-native-ui';

export const InputsPage = () => {
    const [value, setValue] = useState('');

    const handleChangeValue = (value: string) => {
        setValue(value);
    };
    const renderError = () => {
        return <Text style={{ color: 'red' }}>Something went wrong.</Text>;
    };

    return (
        <Screen style={styles.container}>
            <TextInput
                placeHolder="placeholder"
                // isError
                // renderError={renderError}
                label={'Label'}
                informationText={'info text'}
                value={value}
                onChangeText={handleChangeValue}
            />
            <TextInput
                placeHolder="placeholder"
                label={'Label'}
                informationText={'info text'}
                value={'placeholder'}
                onChangeText={handleChangeValue}
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
