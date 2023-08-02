import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PlusMinusInput, Screen } from 'smartway-react-native-ui';

export const PlusMinusInputPage = () => {
    const [value, setValue] = useState<number>(0);
    const [otherValue, setOtherValue] = useState<number>(0);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
        },
    });

    return (
        <Screen>
            <View style={styles.container}>
                <View style={{ paddingBottom: 5 }}>
                    <PlusMinusInput
                        onValueChange={setValue}
                        showSoftInputOnFocus={true}
                        value={value}
                        minValue={0}
                        maxValue={999}
                        minusIcon="arrow-left"
                        plusIcon="arrow-right"
                    />
                </View>
                <View>
                    <PlusMinusInput
                        onValueChange={setOtherValue}
                        showSoftInputOnFocus={true}
                        value={otherValue}
                        size="s"
                        minValue={0}
                        maxValue={999}
                    />
                </View>
            </View>
        </Screen>
    );
};
