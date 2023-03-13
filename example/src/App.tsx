import React from 'react';
import { ThemeProvider } from 'smartway-react-native-ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { ButtonsPage } from './Buttons/ButtonsPage';
import { DialogPage } from './Dialog/DialogPage';
import { InputsPage } from './Inputs/InputPage';
import { BottomSheetPage } from './BottomSheet/BottomSheetPage';

export type RootStackParamList = {
    Home: undefined;
    Buttons: undefined;
    Dialog: undefined;
    Input: undefined;
    BottomSheet: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Buttons" component={ButtonsPage} />
                    <Stack.Screen name="Dialog" component={DialogPage} />
                    <Stack.Screen name="Input" component={InputsPage} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="BottomSheet"
                        component={BottomSheetPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
