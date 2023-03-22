import React from 'react';
import { ThemeProvider } from 'smartway-react-native-ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { ButtonsPage } from './Buttons/ButtonsPage';
import { DialogPage } from './Dialog/DialogPage';
import { InputsPage } from './Inputs/InputPage';
import { KeyboardPage } from './Keyboard/KeyboardPage';
import { BottomSheetPage } from './BottomSheet/BottomSheetPage';
import { DropDownPage } from './DropDown/DropDownPage';
import { SnackBarPage } from './SnackBar/SnackBarPage';
import { TogglePage } from './TogglePage/TogglePage';
import { MenuPage } from './Menu/MenuPage';
import { AppBarPage } from './AppBar/AppBarPage';
import { CardPage } from './Card/CardPage';

export type RootStackParamList = {
    Home: undefined;
    Buttons: undefined;
    Dialog: undefined;
    Input: undefined;
    Keyboard: undefined;
    BottomSheet: undefined;
    DropDown: undefined;
    SnackBar: undefined;
    Toggle: undefined;
    Menu: undefined;
    AppBar: undefined;
    Card: undefined;
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
                    <Stack.Screen name="Keyboard" component={KeyboardPage} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="BottomSheet"
                        component={BottomSheetPage}
                    />
                    <Stack.Screen name="DropDown" component={DropDownPage} />
                    <Stack.Screen name="SnackBar" component={SnackBarPage} />
                    <Stack.Screen name="Toggle" component={TogglePage} />
                    <Stack.Screen name="Menu" component={MenuPage} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="AppBar"
                        component={AppBarPage}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Card"
                        component={CardPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
