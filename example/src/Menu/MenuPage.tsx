import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Headline, Menu, Screen } from 'smartway-react-native-ui';

export const MenuPage = () => {
    const options = [
        {
            title: 'Long element menu',
            onPress: () => {
                Alert.alert('Long element menu pressed !');
            },
        },
        {
            title: 'Element menu 2',
            onPress: () => {
                'Element menu 2 pressed';
            },
        },
        {
            title: 'Option 3',
            onPress: () => {
                'Option 3 pressed';
            },
        },
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
