import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'smartway-react-native-ui';

export const KeyboardPage = () => {
    interface DropDownOptions<T> {
        nameToDisplayed: string;
        T: T;
    }
    return (
        <View style={{ padding: 16 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        1
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        2
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        3
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        -
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        4
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        5
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        6
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 12, textAlign: 'center', justifyContent: 'center' }}>
                        space
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        7
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        8
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        9
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        del
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        *#
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        0
                    </Text>
                </View>
                <View style={{ height: 40, width: 40, backgroundColor: 'green', margin: 4 }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        .
                    </Text>
                </View>
                <View
                    style={{
                        height: 40,
                        width: 40,
                        backgroundColor: 'green',
                        margin: 4,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ fontSize: 24, textAlign: 'center', justifyContent: 'center' }}>
                        <Icon name="arrow-right" />
                    </Text>
                </View>
            </View>
        </View>
    );
};
