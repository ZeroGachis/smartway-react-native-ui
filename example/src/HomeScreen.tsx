import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Logo, useTheme } from 'smartway-react-native-ui';
import type { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },

        button: {
            marginBottom: theme.sw.spacing.s,
        },
    });
    return (
        <View style={styles.container}>
            <Logo size="small" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: theme.sw.spacing.xl }}
            >
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('Buttons');
                    }}
                >
                    Buttons
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('Dialog');
                    }}
                >
                    Dialogs
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('Input');
                    }}
                >
                    Inputs
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('DropDown');
                    }}
                >
                    DropDown
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('SnackBar');
                    }}
                >
                    SnackBar
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('Toggle');
                    }}
                >
                    Toggle
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('AppBar');
                    }}
                >
                    AppBar
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('Menu');
                    }}
                >
                    Menu
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('PrintState');
                    }}
                >
                    Print State
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('BottomSheet');
                    }}
                >
                    BottomSheet
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('Card');
                    }}
                >
                    Card
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('Keyboard');
                    }}
                >
                    Keyboard
                </Button>
                <Button
                    mode="filled"
                    style={styles.button}
                    onClick={() => {
                        navigation.navigate('ModifyQuantity');
                    }}
                >
                    Modify Quantity
                </Button>
            </ScrollView>
        </View>
    );
};
