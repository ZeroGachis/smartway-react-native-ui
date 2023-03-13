import React from 'react';
import { ThemeProvider } from 'smartway-react-native-ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { ButtonsPage } from './Buttons/ButtonsPage';
import { DialogPage } from './Dialog/DialogPage';
import { InputsPage } from './Inputs/InputPage';
import { DropDownPage } from './DropDown/DropDownPage';
import { SnackBarPage } from './SnackBar/SnackBarPage';

export type RootStackParamList = {
    Home: undefined;
    Buttons: undefined;
    Dialog: undefined;
    Input: undefined;
    DropDown: undefined;
    SnackBar: undefined;
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
                    <Stack.Screen name="DropDown" component={DropDownPage} />
                    <Stack.Screen name="SnackBar" component={SnackBarPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
