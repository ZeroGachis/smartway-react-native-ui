import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Headline, Icon, Menu, useTheme } from 'smartway-react-native-ui';

export const MenuPage = () => {
    const theme = useTheme();

    const [visible, setVisible] = useState<boolean>(true);
    const options = [
        { title: 'Long element menu', onPress: () => {} },
        { title: 'Element menu 2', onPress: () => {} },
        { title: 'Option 3', onPress: () => {} },
    ];

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            margin: 16,
        },
    });

    return (
        <View style={styles.container}>
            <Headline size="h2">Affichage du menu</Headline>

            <Menu
                visible={visible}
                onPress={() => setVisible(true)}
                onDismiss={() => setVisible(false)}
                options={options}
                icon={'settings'}
            />
        </View>
    );
};
