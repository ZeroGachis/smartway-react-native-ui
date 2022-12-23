import React from 'react';
import { View } from 'react-native';
import { Button } from 'smartway-react-native-ui';
import { styles } from '../../utilities';

export function ButtonsPage(): JSX.Element {
  return (
    <View style={styles.container}>
      <Button style={styles.button} mode="contained">
        Contained
      </Button>
      <Button style={styles.button} mode="contained-tonal">
        Contained tonal
      </Button>
      <Button style={styles.button} mode="elevated">
        Elevated
      </Button>
      <Button style={styles.button} mode="outlined">
        Outlined
      </Button>
      <Button style={styles.button} mode="text">
        Text
      </Button>
    </View>
  );
}
