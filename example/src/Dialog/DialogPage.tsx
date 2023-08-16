import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { Body, Button, Dialog, Screen, useTheme } from 'smartway-react-native-ui';

export const DialogPage = () => {
    const [OptionsDialog, setOptionsDialog] = useState<boolean>(false);
    const [haveSecondButton, setHaveSecondButton] = useState<boolean>(false);
    const [variant, setVariant] = useState<'left' | 'center'>('left');
    const [dismissable, setDismissable] = useState<boolean>(true);
    const theme = useTheme();

    const styles = StyleSheet.create({
        content: {
            color: theme.sw.colors.neutral[600],
            textAlign: variant,
            lineHeight: 22,
            marginBottom: 0,
        },
        container: {
            padding: 16,
        },
        options: {
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
        },
        option: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
        },
    });

    return (
        <Screen style={styles.container}>
            <View style={styles.options}>
                <View style={styles.option}>
                    <Body>Variant : {variant}</Body>
                    <Switch
                        value={variant == 'center'}
                        onValueChange={(value) => setVariant(value ? 'center' : 'left')}
                    />
                </View>
                <View style={styles.option}>
                    <Body>Second button</Body>
                    <Switch
                        value={haveSecondButton}
                        onValueChange={() => setHaveSecondButton(!haveSecondButton)}
                    />
                </View>
                <View style={styles.option}>
                    <Body>Dismissable</Body>
                    <Switch
                        value={dismissable}
                        onValueChange={() => setDismissable(!dismissable)}
                    />
                </View>
            </View>
            <StatusBar backgroundColor={'transparent'} />
            <Button mode="text" onPress={() => setOptionsDialog(true)}>
                Show
            </Button>
            <Dialog
                visible={OptionsDialog}
                title={'Headline'}
                variant={variant}
                dismissable={dismissable}
                actions={{
                    confirm: {
                        label: 'Valider',
                        onPress: () => setOptionsDialog(false),
                    },
                    cancel: haveSecondButton
                        ? {
                              label: 'Annuler',
                              onPress: () => setOptionsDialog(false),
                          }
                        : undefined,
                }}
            >
                <Body style={styles.content}>
                    A dialog is a type of modal window that appears in front of app content to
                    provide critical information. This is a dialog content example.
                </Body>
            </Dialog>
        </Screen>
    );
};
