import React, { useState } from 'react';
import { View } from 'react-native';
import { ActionCard, Icon, EANInput, Screen, TextField, useTheme } from 'smartway-react-native-ui';

export const ActionCardPage = () => {
    const theme = useTheme();

    const [scanValue, setValue] = useState('');

    return (
        <Screen>
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
                        <TextField
                            textType="information"
                            value="0"
                            style={{ marginBottom: 0, marginLeft: 12 }}
                            inputStyles={{
                                fontSize: 28,
                                lineHeight: 33,
                                textAlign: 'center',
                            }}
                        />
                    </View>
                </View>
            </ActionCard>
        </Screen>
    );
};
