import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { Button, Dialog, Screen } from 'smartway-react-native-ui';

export const DialogPage = () => {
    const [singleOptionDialog, setSingleOptionDialog] = useState<boolean>(false);
    const [twoOptionsDialog, setTwoOptionsDialog] = useState<boolean>(false);

    return (
        <Screen style={styles.container}>
            <StatusBar backgroundColor={'transparent'} />
            <Button mode="text" onClick={() => setSingleOptionDialog(true)}>
                single option
            </Button>
            <Button mode="text" onClick={() => setTwoOptionsDialog(true)}>
                two options
            </Button>
            <Dialog
                visible={singleOptionDialog}
                title={'Titre du dialog'}
                content={'Contenu texte du dialog pour expliquer l’action à faire '}
                confirmButtonLabel={'Valider'}
                onConfirm={() => setSingleOptionDialog(false)}
                onDismiss={() => setSingleOptionDialog(false)}
            />
            <Dialog
                visible={twoOptionsDialog}
                title={'Titre du dialog'}
                content={'Contenu texte du dialog pour expliquer l’action à faire '}
                dismissButtonLabel={'Annuler'}
                confirmButtonLabel={'Valider'}
                onDismiss={() => setTwoOptionsDialog(false)}
                onConfirm={() => setTwoOptionsDialog(false)}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});
