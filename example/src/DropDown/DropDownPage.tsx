import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DropDown, Screen } from 'smartway-react-native-ui';

export const DropDownPage = () => {
    const [selected, setSelected] = useState('');

    const options = ['option 1', 'option 2', 'option 3', 'option 4'];

    return (
        <Screen style={styles.container}>
            <DropDown
                placeholder="Text"
                options={options}
                setSelected={setSelected}
                selected={selected}
            />
            <DropDown
                placeholder="Text"
                options={options}
                setSelected={setSelected}
                selected={selected}
                disabled
            />
            <DropDown
                placeholder="Text"
                options={options}
                setSelected={setSelected}
                selected={selected}
                error
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
