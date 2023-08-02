import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Screen, TextField } from 'smartway-react-native-ui';

export const InputsPage = () => {
    const [value, setValue] = useState('');

    const handleChangeValue = (value: string) => {
        setValue(value);
    };

    return (
        <Screen style={styles.container}>
            <TextField
                label={'Label'}
                text={'Information txt'}
                value={value}
                onChangeText={handleChangeValue}
                textType={'information'}
            />
            <TextField
                text={'warning text'}
                label={'Label'}
                textType={'warning'}
                value={'placeholder'}
            />
            <TextField
                text={'warning text with icon'}
                icon={'dlc'}
                label={'Label'}
                textType={'warning'}
                value={'placeholder'}
            />
            <TextField
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
