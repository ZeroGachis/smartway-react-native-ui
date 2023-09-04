import type { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import {
    TopAppBar,
    BottomSheet,
    Button,
    Headline,
    Screen,
    useTheme,
} from 'smartway-react-native-ui';

interface Props {
    navigation: NavigationProp<any>;
}

export const TopAppBarPage = ({ navigation }: Props) => {
    const theme = useTheme();
    const [isOpened, setOpened] = useState<boolean>(false);

    const goBack = () => {
        navigation.goBack();
    };

    const showSettings = () => {
        Alert.alert('Click');
    };

    const menu = (
        <View>
            <Button mode="outlined" onPress={() => setOpened(true)}>
                {'Aujourdhui'}
            </Button>
        </View>
    );

    return (
        <Screen
            style={{
                backgroundColor: theme.sw.colors.neutral[50],
                paddingLeft: 0,
                paddingRight: 0,
            }}
        >
            <TopAppBar
                size="small"
                title={{ value: 'Headline' }}
                icon={{ name: 'dots-vertical', onPress: showSettings }}
            />
            <TopAppBar
                size="center-aligned"
                onBack={goBack}
                title={{ value: menu, onPress: () => setOpened(true) }}
                icon={{ name: 'dots-vertical', onPress: showSettings }}
            />
            <TopAppBar
                size="center-aligned"
                onBack={goBack}
                title={{ value: menu, onPress: () => setOpened(true) }}
            />
            <TopAppBar
                size="medium"
                onBack={goBack}
                title={{ value: <Headline size="h1">Headline H1</Headline> }}
                icon={{ name: 'dots-vertical', onPress: showSettings }}
            />
            <BottomSheet
                snapPoints={['40%']}
                swipeable={true}
                title="Title"
                titleProps={{ style: { textAlign: 'center', marginBottom: theme.sw.spacing.s } }}
                isOpened={isOpened}
                onClose={() => setOpened(false)}
            >
                <Button onPress={() => setOpened(false)}>Option</Button>
            </BottomSheet>
        </Screen>
    );
};
