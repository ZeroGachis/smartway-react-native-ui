import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Dialog, Screen } from "smartway-react-native-ui";

export function DialogPage() {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const showModal = () => {
      setModalVisible(true);
    }
  
    const hideModal = () => {
      setModalVisible(false);
    }
    
    return (
        <Screen style={styles.container}>
          <Button mode="text" onClick={showModal}>Click me</Button>
          <Dialog visible={modalVisible} title={'Titre du dialog'} content={'Contenu texte'} onDismiss={hideModal} onConfirm={hideModal}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
