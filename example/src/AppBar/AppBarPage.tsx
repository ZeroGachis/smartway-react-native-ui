import React, { useState } from 'react';
import { View } from 'react-native';
import { AppBar, Menu, useTheme } from 'smartway-react-native-ui';

export const AppBarPage = () => {
    const theme = useTheme();
    const [setMenu, setMenuVisible] = useState(false);

    const menuOptions = [
        { title: 'option 1', onPress: () => console.log('option') },
        { title: 'option 2', onPress: () => console.log('option') },
        { title: 'option 3', onPress: () => console.log('option') },
        { title: 'option 4', onPress: () => console.log('option') },
    ];

    return (
        <View>
            <AppBar onPress={() => {}} text={'Title'}>
                <Menu
                    icon="more"
                    onDismiss={() => setMenuVisible(false)}
                    visible={setMenu}
                    style={{ paddingRight: theme.sw.spacing.m }}
                    onPress={() => setMenuVisible(true)}
                    options={menuOptions}
                />
            </AppBar>
        </View>
    );
};
