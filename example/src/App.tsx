import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, Logo, ThemeProvider } from 'smartway-react-native-ui';

export default function App() {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const showModal = () => {
    setModalVisible(true);
  }

  const hideModal = () => {
    setModalVisible(false);
  }

  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Button mode="text">Text button</Button>
        <Button mode="filled">Filled button</Button>
        <Button mode="filled" onClick={showModal}>Show modal</Button>
        <Logo size='small' />
        <Dialog visible={modalVisible} title={'Titre du dialog'} content={'Contenu texte'} onDismiss={hideModal} onConfirm={hideModal}/>
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
