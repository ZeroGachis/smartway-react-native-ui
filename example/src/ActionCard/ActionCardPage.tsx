import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActionCard, Icon, EANInput, Screen, TextInput, useTheme } from 'smartway-react-native-ui';

export const ActionCardPage = () => {
    const theme = useTheme();

    const [scanValue, setValue] = useState('');

    console.log(scanValue, 'scanValue');

    return (
        <Screen style={styles.container}>
            <ActionCard
                title="Texte action possible"
                titleColor={theme.sw.colors.neutral[500]}
                bottomChildren={
                    <EANInput
                        value={scanValue}
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        placeholder="Scanner ou saisir un gencode"
                    />
                }
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
            </ActionCard>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
});
