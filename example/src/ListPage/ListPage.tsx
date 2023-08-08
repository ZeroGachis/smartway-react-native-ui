import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { Body, Divider, PlusMinusInput, QuantityField, Screen } from 'smartway-react-native-ui';

export const ListPage = () => {
    const [marginTopOrLeft, setMarginTopOrLeft] = useState<number>(10);
    const [marginBottomOrRight, setMarginBottomOrRight] = useState<number>(10);
    const [dashed, setDashed] = useState<boolean>(false);
    const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

    const styles = StyleSheet.create({
        contentContainer: {
            flex: 1,
            marginTop: 10,
            flexDirection: orientation == 'horizontal' ? 'column' : 'row',
        },
        itemLine: {
            backgroundColor: 'steelblue',
            height: orientation == 'horizontal' ? 50 : 'auto',
            width: orientation == 'vertical' ? 50 : 'auto',
        },
        options: {
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
        },
        option: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 60,
        },
    });

    return (
        <Screen>
            <View style={styles.options}>
                <View style={styles.option}>
                    <Body>Dashed</Body>
                    <Switch value={dashed} onValueChange={() => setDashed(!dashed)} />
                </View>
                <View style={styles.option}>
                    <Body>Orientation horizontale</Body>
                    <Switch
                        value={orientation == 'horizontal'}
                        onValueChange={(value) => setOrientation(value ? 'horizontal' : 'vertical')}
                    />
                </View>
                <View style={styles.option}>
                    <Body>Margin Top or Left</Body>
                    <PlusMinusInput
                        value={marginTopOrLeft}
                        onValueChange={(value) => setMarginTopOrLeft(value)}
                        minValue={0}
                        maxValue={100}
                        size="s"
                    />
                </View>
                <View style={styles.option}>
                    <Body>Margin Bottom or Right</Body>
                    <PlusMinusInput
                        value={marginBottomOrRight}
                        onValueChange={(value) => setMarginBottomOrRight(value)}
                        minValue={0}
                        maxValue={100}
                        size="s"
                    />
                </View>
            </View>
            <View style={styles.contentContainer}>
                {[...Array(10)].map(() => (
                    <View
                        key={Math.random()}
                        style={{
                            flexDirection: orientation == 'horizontal' ? 'column' : 'row',
                        }}
                    >
                        <View style={styles.itemLine} />
                        <Divider
                            style={{
                                paddingTop: orientation == 'horizontal' ? marginTopOrLeft : 0,
                                paddingBottom:
                                    orientation == 'horizontal' ? marginBottomOrRight : 0,
                                paddingLeft: orientation == 'vertical' ? marginTopOrLeft : 0,
                                paddingRight: orientation == 'vertical' ? marginBottomOrRight : 0,
                            }}
                            dashed={dashed}
                            orientation={orientation}
                        />
                    </View>
                ))}
            </View>
        </Screen>
    );
};
