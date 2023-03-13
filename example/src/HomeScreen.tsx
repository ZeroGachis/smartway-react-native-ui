import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Logo } from 'smartway-react-native-ui';
import type { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Button
                mode="filled"
                style={{ marginBottom: 12 }}
                onClick={() => {
                    navigation.navigate('Buttons');
                }}
            >
                Buttons
            </Button>
            <Button
                mode="filled"
                style={{ marginBottom: 12 }}
                onClick={() => {
                    navigation.navigate('Dialog');
                }}
            >
                Dialogs
            </Button>
            <Button
                mode="filled"
                style={{ marginBottom: 12 }}
                onClick={() => {
                    navigation.navigate('Input');
                }}
            >
                Inputs
            </Button>
            <Button
                mode="filled"
                style={{ marginBottom: 12 }}
                onClick={() => {
                    navigation.navigate('DropDown');
                }}
            >
                DropDown
            </Button>
            <Button
                mode="filled"
                style={{ marginBottom: 12 }}
                onClick={() => {
                    navigation.navigate('Toggle');
                }}
            >
                Toggle
            </Button>
            <Logo size="small" />
        </View>
    );
};

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
