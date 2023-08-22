import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Screen } from 'react-native-screens';
import { Body, Headline } from 'smartway-react-native-ui';

export const BodyPage = () => {
    const [size, setSize] = useState<'B1' | 'B2' | 'B3'>('B2');
    const [weight, setWeight] = useState<'regular' | 'semi-bold' | 'bold'>('regular');
    const styles = StyleSheet.create({
        container: {
            padding: 16,
        },
        codeContainer: {
            borderColor: 'black',
            borderWidth: 1,
            marginVertical: 12,
        },
        options: {
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
        },
        option: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });

    return (
        <Screen style={styles.container}>
            <View style={styles.options}>
                <Headline size="h4">size : </Headline>
                <RadioButton.Group
                    onValueChange={(value) => setSize(value as 'B1' | 'B2' | 'B3')}
                    value={size ?? 'B1'}
                >
                    <View style={styles.option}>
                        <Text>B1</Text>
                        <RadioButton uncheckedColor="grey" value="B1" />
                    </View>
                    <View style={styles.option}>
                        <Text>B2</Text>
                        <RadioButton uncheckedColor="grey" value="B2" />
                    </View>
                    <View style={styles.option}>
                        <Text>B3</Text>
                        <RadioButton uncheckedColor="grey" value="B3" />
                    </View>
                </RadioButton.Group>
                <Headline size="h4">weight : </Headline>
                <RadioButton.Group
                    onValueChange={(value) => setWeight(value as 'regular' | 'semi-bold' | 'bold')}
                    value={weight ?? 'regular'}
                >
                    <View style={styles.option}>
                        <Text>bold</Text>
                        <RadioButton uncheckedColor="grey" value="bold" />
                    </View>
                    <View style={styles.option}>
                        <Text>semi-bold</Text>
                        <RadioButton uncheckedColor="grey" value="semi-bold" />
                    </View>
                    <View style={styles.option}>
                        <Text>regular</Text>
                        <RadioButton uncheckedColor="grey" value="regular" />
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Headline size="h4">code : </Headline>
                <View style={styles.codeContainer}>
                    <Body size="B1">
                        {`
                <Body size={'${size}'} weight={'${weight}'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quisquam, nulla
                    earum ut porro distinctio autem deleniti laborum nisi ex ipsum nihil beatae
                    facilis. Vel unde molestias quibusdam dolorem libero.
                </Body>
                `}
                    </Body>
                </View>
            </View>
            <View>
                <Body size={size} weight={weight}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quisquam, nulla
                    earum ut porro distinctio autem deleniti laborum nisi ex ipsum nihil beatae
                    facilis. Vel unde molestias quibusdam dolorem libero.
                </Body>
            </View>
        </Screen>
    );
};
