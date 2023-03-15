import React, { useState } from 'react';
import { View } from 'react-native';
import { AppBar, useTheme } from 'smartway-react-native-ui';

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
            <AppBar
                menuIcon="more"
                onMenuDismiss={() => setMenuVisible(false)}
                menuVisible={setMenu}
                onPress={() => {}}
                menuContainerStyle={{ paddingRight: theme.sw.spacing.m }}
                onMenuPress={() => setMenuVisible(true)}
                menuOptions={menuOptions}
                headLineText={'Title'}
            />
        </View>
    );
};
