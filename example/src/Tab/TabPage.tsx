import React, { useState } from 'react';
import { View } from 'react-native';
import { Screen, Tab, useTheme } from 'smartway-react-native-ui';

export const TabPage = () => {
    const theme = useTheme();
    const [activeTab, setActive] = useState('Zéro-Gâchis');

    const handleTabPress = (tab: string) => {
        setActive(tab);
    };

    return (
        <Screen style={{ backgroundColor: theme.sw.colors.neutral[50] }}>
            <View style={{ flexDirection: 'row' }}>
                <Tab
                    onPress={() => {
                        handleTabPress('Zéro-Gâchis');
                    }}
                    selected={activeTab === 'Zéro-Gâchis'}
                    text="Zéro-Gâchis"
                />
                <Tab
                    onPress={() => {
                        handleTabPress('Don');
                    }}
                    selected={activeTab === 'Don'}
                    text="Don"
                />
                <Tab
                    onPress={() => {
                        handleTabPress('Casse');
                    }}
                    selected={activeTab === 'Casse'}
                    text="Casse"
                />
            </View>
        </Screen>
    );
};
