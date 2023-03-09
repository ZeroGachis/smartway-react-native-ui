import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DropDown, Screen } from 'smartway-react-native-ui';

type DropDownOption = {
    name: string;
    value: any;
};

export const DropDownPage = () => {
    const [selected, setSelected] = useState<DropDownOption | undefined>(undefined);

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
                label={'Label'}
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
                label={'Label'}
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
