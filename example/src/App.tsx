import * as React from 'react';
import { ThemeProvider } from 'smartway-react-native-ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './HomeScreen';
import { ButtonsPage } from './Buttons/ButtonsPage';
import { DialogPage } from './Dialog/DialogPage';

export type RootStackParamList = {
  Home: undefined,
  Buttons: undefined,
  Dialog: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Buttons" component={ButtonsPage} />
          <Stack.Screen name="Dialog" component={DialogPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
