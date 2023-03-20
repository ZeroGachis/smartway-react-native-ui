import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { DropDown, Screen } from 'smartway-react-native-ui';
import type { DropDownOption } from 'src/components/dropDown/DropDown';

export const DropDownPage = () => {
    const [selected, setSelected] = useState<DropDownOption>();

    const options: DropDownOption[] = [
        { value: 'Option 1' },
        { value: 'Option 2' },
        { value: 'Option 3' },
        { value: 'Option 4' },
    ];

    return (
        <Screen style={styles.container}>
            <DropDown
                placeholder="something"
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
