import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View, Pressable, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Logo, useTheme } from 'smartway-react-native-ui';
import type { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    const screenHeight = Dimensions.get('window').height
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            maxHeight: screenHeight
        },

        button: {
            marginBottom: theme.sw.spacing.s,
        },
    });
    return (
        <View style={styles.container}>
            <Logo size="small" />
            <ScrollView
                showsVerticalScrollIndicator={true}
                scrollEnabled={true}
                nestedScrollEnabled={true}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: theme.sw.spacing.xl }}
            >
            <Pressable>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Buttons');
                    }}
                >
                    Buttons
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Dialog');
                    }}
                >
                    Dialogs
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Input');
                    }}
                >
                    Inputs
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('DropDown');
                    }}
                >
                    DropDown
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('SnackBar');
                    }}
                >
                    SnackBar
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Toggle');
                    }}
                >
                    Toggle
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('AppBar');
                    }}
                >
                    AppBar
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Menu');
                    }}
                >
                    Menu
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('PrintState');
                    }}
                >
                    Print State
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('BottomSheet');
                    }}
                >
                    BottomSheet
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ActionCard');
                    }}
                >
                    ActionCard
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Keyboard');
                    }}
                >
                    Keyboard
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ModifyQuantity');
                    }}
                >
                    ModifyQuantity
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('PlusMinusInput');
                    }}
                >
                    PlusMinusInput
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Card');
                    }}
                >
                    Card
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Tab');
                    }}
                >
                    Tab
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('Label');
                    }}
                >
                    Label
                </Button>
                <Button
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ProductPage');
                    }}
                >
                    Product
                </Button>
                </Pressable>
            </ScrollView>
        </View>
    );
};
