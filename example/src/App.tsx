import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'smartway-react-native-ui';

export default function App() {

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Button icon="camera" mode="contained">Example</Button>
      </View>
    </PaperProvider>
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
