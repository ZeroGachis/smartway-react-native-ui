import React from 'react';
import { View } from 'react-native';
import { Button } from 'smartway-react-native-ui';
import { styles, useNavigationContext } from '../../utilities';

export function RootPage(): JSX.Element {
  const navigation = useNavigationContext();

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('Buttons')}
      >
        Buttons
      </Button>
    </View>
  );
}
