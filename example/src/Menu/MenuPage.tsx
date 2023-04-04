import React from 'react';
import { StyleSheet } from 'react-native';
import { Headline, Menu, Screen } from 'smartway-react-native-ui';

export const MenuPage = () => {
    const options = [
        { title: 'Long element menu', onPress: () => {} },
        { title: 'Element menu 2', onPress: () => {} },
        { title: 'Option 3', onPress: () => {} },
    ];

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignContent: 'center',
            padding: 16,
        },
    });

    return (
        <Screen style={styles.container}>
            <Headline size="h2">Affichage du menu</Headline>
            <Menu
                options={options}
                icon={'settings'}
                style={{ position: 'absolute', right: 16, top: 20 }}
            />
        </Screen>
    );
};
