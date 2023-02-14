import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Logo, ThemeProvider } from 'smartway-react-native-ui';

export default function App() {

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Button mode="text">Text button</Button>
        <Button mode="filled">Filled button</Button>
        <Logo size='small' />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
