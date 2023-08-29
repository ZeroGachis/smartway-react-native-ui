import React, { useState } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import {
    Body,
    Card as CustomCard,
    Headline,
    NumberSelector,
    Screen,
    useTheme,
} from 'smartway-react-native-ui';

export const CardShadowPage = () => {
    const [val, setVal] = useState<number>(0);
    const [valX, setValX] = useState<number>(0);
    const [valY, setValY] = useState<number>(0);
    const theme = useTheme();
    const customCardStyle: ViewStyle = {
        marginTop: theme.sw.spacing.xxl,
    };

    const style = StyleSheet.create({
        container: {
            paddingTop: theme.sw.spacing.m,
            marginTop: 0,
            backgroundColor: theme.sw.colors.neutral[50],
        },
        textContent: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            textAlign: 'center',
            color: theme.sw.colors.neutral[700],
            marginTop: theme.sw.spacing.s,
        },
        body: {
            marginTop: theme.sw.spacing.s,
            textAlign: 'center',
            color: theme.sw.colors.neutral[600],
        },
    });
    const numberSelectorStyle: ViewStyle = {
        paddingBottom: 20,
        alignItems: 'center',
        alignSelf: 'center',
    };
    return (
        <Screen style={style.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={numberSelectorStyle}>
                    <Text>Elevation</Text>
                    <NumberSelector
                        minValue={0}
                        maxValue={999}
                        value={val}
                        size="s"
                        onValueChange={(e) => setVal(e)}
                    />
                </View>
                <View style={numberSelectorStyle}>
                    <Text>Offset x</Text>
                    <NumberSelector
                        minValue={-999}
                        maxValue={999}
                        value={valX}
                        size="s"
                        onValueChange={(e) => setValX(e)}
                    />
                </View>
                <View style={numberSelectorStyle}>
                    <Text>Offset y</Text>
                    <NumberSelector
                        minValue={-999}
                        maxValue={999}
                        value={valY}
                        size="s"
                        onValueChange={(e) => setValY(e)}
                    />
                </View>
            </View>
            <View>
                <CustomCard style={customCardStyle}>
                    <View style={style.textContent}>
                        <Headline size="h3" style={style.title}>
                            Some very interesting title
                        </Headline>
                        <Body style={style.body}>Some very interesting content</Body>
                    </View>
                </CustomCard>
            </View>
        </Screen>
    );
};
