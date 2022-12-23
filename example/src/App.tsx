import { ButtonsPage, RootPage } from './views';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={RootPage} />
          <Stack.Screen name="Buttons" component={ButtonsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
