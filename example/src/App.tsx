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
import { PrintPage } from './PrintStatePage/PrintPage';
import { ActionCardPage } from './ActionCard/ActionCardPage';
import { CardPage } from './Card/CardPage';
import { ModifyQuantityPage } from './ModifyQuantity/ModifyQuantityPage';
import { PlusMinusInputPage } from './PlusMinusInput/PlusMinusInputPage';
import { TabPage } from './Tab/TabPage';
import { LabelPage } from './Label/LabelPage';
import { ProductPage } from './Product/ProductPage';

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
    PrintState: undefined;
    ActionCard: undefined;
    Card: undefined;
    ModifyQuantity: undefined;
    PlusMinusInput: undefined;
    Tab: undefined;
    Label: undefined;
    ProductPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        contentStyle: { backgroundColor: '#FFF' },
                    }}
                    initialRouteName="Home"
                >
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
                    <Stack.Screen name="PrintState" component={PrintPage} />
                    <Stack.Screen name="ModifyQuantity" component={ModifyQuantityPage} />
                    <Stack.Screen name="PlusMinusInput" component={PlusMinusInputPage} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="AppBar"
                        component={AppBarPage}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="ActionCard"
                        component={ActionCardPage}
                    />
                    <Stack.Screen name="Card" component={CardPage} />
                    <Stack.Screen name="Tab" component={TabPage} />
                    <Stack.Screen name="Label" component={LabelPage} />
                    <Stack.Screen name="ProductPage" component={ProductPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
