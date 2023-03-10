import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DropDown, Screen } from 'smartway-react-native-ui';

type DropDownOption<T = any> = {
    name: string;
    value: T;
};

export const DropDownPage = () => {
    const [selected, setSelected] = useState<DropDownOption>(undefined);

    const options = [
        { name: 'option 1', value: {} },
        { name: 'option 2', value: {} },
        { name: 'option 3', value: {} },
        { name: 'option 4', value: {} },
    ];

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
