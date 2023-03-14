import React, { useRef, useState } from 'react';
import {
    Alert,
    Dimensions,
    Keyboard,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');
export const KeyboardPage = () => {
    const [value, setValue] = useState('');

    const textInputRef = useRef<TextInput>(null);
    const styles = StyleSheet.create({
        button: {
            height: SCREEN_HEIGHT * 0.0671,
            width: '30%',
            margin: 5,
        },
    });

    const handlePress = (input: string) => {
        setValue(value + input);
        textInputRef.current?.focus();
    };
    const handleDelete = () => {
        setValue(value.slice(0, -1));
    };
    return (
        <View style={{ marginHorizontal: 5, marginTop: 50, backgroundColor: 'white' }}>
            <TextInput showSoftInputOnFocus={false} ref={textInputRef} value={value}></TextInput>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <Pressable style={[styles.button]} onPress={() => handlePress('1')}>
                    <Text
                        style={{
                            fontSize: 24,
                            textAlign: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        1
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('2')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        2
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('3')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        3
                    </Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Pressable style={styles.button} onPress={() => handlePress('4')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        4
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('5')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        5
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('6')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        6
                    </Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Pressable style={styles.button} onPress={() => handlePress('7')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        7
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('8')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        8
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('9')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        9
                    </Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Pressable style={styles.button} onPress={handleDelete}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        del
                    </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handlePress('0')}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        0
                    </Text>
                </Pressable>
                <Pressable style={[styles.button]} onPress={() => Alert.alert("Let's go")}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        OK
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};
