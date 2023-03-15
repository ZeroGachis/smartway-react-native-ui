React;
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Toggle } from 'smartway-react-native-ui';

export const TogglePage = () => {
    const [toggled, setToggled] = useState<boolean>(false);

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            marginTop: 16,
        },
    });

    return (
        <View style={styles.container}>
            <Toggle text="%" isToggled={toggled} onValueChange={() => setToggled(!toggled)} />
        </View>
    );
};
