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
                text={'Information txt'}
                value={value}
                onChangeText={handleChangeValue}
                textType={'information'}
            />
            <TextInput
                text={'warning text'}
                label={'Label'}
                textType={'warning'}
                value={'placeholder'}
            />
            <TextInput
                text={'warning text with icon'}
                icon={'dlc'}
                label={'Label'}
                textType={'warning'}
                value={'placeholder'}
            />
            <TextInput
                label={'Label'}
                value={'placeholder'}
                text={'error text'}
                icon={'dlc'}
                textType={'error'}
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
