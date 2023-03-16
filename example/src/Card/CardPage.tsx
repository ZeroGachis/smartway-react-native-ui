import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Card, Icon, Scan, Screen, TextInput, useTheme } from 'smartway-react-native-ui';

export const CardPage = () => {
    const theme = useTheme();

    return (
        <Screen style={styles.container}>
            <Card
                withClose
                bottomChildren={<Scan text="Scanner ou saisir un gencode" state="default" />}
                title="Texte action possible"
                titleColor={theme.sw.colors.neutral[500]}
            >
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon size={24} name="close" />
                        <TextInput
                            textType="information"
                            value="0"
                            style={{ marginBottom: 0, marginLeft: 12 }}
                            inputStyles={{ fontSize: 28, textAlign: 'center' }}
                        />
                    </View>
                </View>
            </Card>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
});
