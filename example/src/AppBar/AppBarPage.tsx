import type { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AppBar, BottomSheet, Button, Screen, useTheme } from 'smartway-react-native-ui';

interface Props {
    navigation: NavigationProp<any>;
}

export const AppBarPage = ({ navigation }: Props) => {
    const theme = useTheme();
    const [isOpened, setOpened] = useState<boolean>(false);

    const goBack = () => {
        navigation.goBack();
    };

    const menu = (
        <View>
            <Button mode="outlined" onPress={() => setOpened(true)}>
                {'Revalorisation'}
            </Button>
        </View>
    );

    return (
        <Screen style={{ backgroundColor: theme.sw.colors.neutral[50], paddingTop: 16 }}>
            <AppBar
                onTitlePress={() => setOpened(true)}
                onBack={goBack}
                title="Title"
                subtitle="Label"
                firstIconName="dots-vertical"
                secondIconName="dots-vertical"
            />
            <AppBar
                size="medium"
                onTitlePress={() => setOpened(true)}
                onBack={goBack}
                title="Title"
                subtitle="Long Label"
                firstIconName="dots-vertical"
                secondIconName="dots-vertical"
            />
            <AppBar
                size="center-aligned"
                onTitlePress={() => setOpened(true)}
                onBack={goBack}
                title="Title"
                firstIconName="dots-vertical"
            />
            <AppBar
                size="center-aligned"
                onTitlePress={() => setOpened(true)}
                onBack={goBack}
                title={menu}
                firstIconName="cog"
            />
            <BottomSheet
                snapPoints={['40%']}
                swipeable={true}
                title="Title"
                titleProps={{ style: { textAlign: 'center', marginBottom: theme.sw.spacing.s } }}
                isOpened={isOpened}
                onClose={() => setOpened(false)}
            >
                <Button mode="filled" onPress={() => setOpened(false)}>
                    Option
                </Button>
            </BottomSheet>
        </Screen>
    );
};
