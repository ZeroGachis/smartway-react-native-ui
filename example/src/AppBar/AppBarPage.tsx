import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppBar, Menu, useTheme } from 'smartway-react-native-ui';
import type { DropDownOption } from 'src/components/dropDown/DropDown';

export const AppBarPage = () => {
    const theme = useTheme();
    const [setMenu, setMenuVisible] = useState(false);

    const menuOptions = [
        { title: 'option 1', onPress: () => console.log('option') },
        { title: 'option 2', onPress: () => console.log('option') },
        { title: 'option 3', onPress: () => console.log('option') },
        { title: 'option 4', onPress: () => console.log('option') },
    ];

    const options: DropDownOption[] = [
        { value: 'Revalorisation auto' },
        { value: 'Option 2' },
        { value: 'Option 3' },
        { value: 'Option 4' },
    ];
    const [selected, setSelected] = useState<DropDownOption>();

    useEffect(() => {
        setSelected(options[0]);
    }, []);

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <AppBar onPress={() => {}} label={'Title'}>
                <Menu
                    icon="more"
                    onDismiss={() => setMenuVisible(false)}
                    visible={setMenu}
                    style={{ paddingRight: theme.sw.spacing.m }}
                    onPress={() => setMenuVisible(true)}
                    options={menuOptions}
                />
            </AppBar>
            <AppBar onPress={() => console.log('f')} label={selected?.value} type="accordion">
                <Menu
                    icon="settings"
                    onDismiss={() => setMenuVisible(false)}
                    visible={setMenu}
                    style={{ position: 'absolute', right: 16, top: 12 }}
                    onPress={() => setMenuVisible(true)}
                    options={menuOptions}
                />
            </AppBar>
        </View>
    );
};
