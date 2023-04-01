import type { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { AppBar, BottomSheet, Button, Menu, Screen, useTheme } from 'smartway-react-native-ui';
import type { DropDownOption } from 'src/components/dropDown/DropDown';

interface Props {
    navigation: NavigationProp<any>;
}

export const AppBarPage = ({ navigation }: Props) => {
    const theme = useTheme();
    const [setMenu, setMenuVisible] = useState(false);
    const [selected, setSelected] = useState<DropDownOption>();
    const [isOpened, setOpened] = useState<boolean>(false);
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

    const goBack = () => {
        navigation.goBack();
    };

    useEffect(() => {
        setSelected(options[0]);
    }, []);

    return (
        <Screen style={{ backgroundColor: theme.sw.colors.neutral[50], paddingTop: 16 }}>
            <AppBar style={{ paddingBottom: theme.sw.spacing.m }} onPress={goBack} label={'Title'}>
                <Menu
                    icon="more"
                    onDismiss={() => setMenuVisible(false)}
                    visible={setMenu}
                    onPress={() => setMenuVisible(true)}
                    options={menuOptions}
                />
            </AppBar>
            <AppBar
                onPress={() => setOpened(true)}
                label={selected?.value}
                disabled={isOpened}
                iconName="arrow-back"
                type="accordion"
            >
                <Menu
                    icon="settings"
                    onDismiss={() => setMenuVisible(false)}
                    visible={setMenu}
                    style={{ position: 'absolute', right: 16, top: 12 }}
                    onPress={() => setMenuVisible(true)}
                    options={menuOptions}
                />
            </AppBar>
            <BottomSheet
                snapPoints={['40%']}
                swipeable={true}
                title="Title"
                titleProps={{ style: { textAlign: 'center', marginBottom: theme.sw.spacing.s } }}
                isOpened={isOpened}
                onClose={() => setOpened(false)}
            >
                <Button mode="filled">Option</Button>
            </BottomSheet>
        </Screen>
    );
};
