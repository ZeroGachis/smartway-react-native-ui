import React, { useState } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
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
    const theme = useTheme();
    const customCardStyle: ViewStyle = {
        marginTop: theme.sw.spacing.xxl,
        backgroundColor: theme.sw.colors.neutral[50],
        borderColor: theme.sw.colors.neutral[900],
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        shadowColor: '#FF0000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: val,
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
        bigShadow: {
            shadowOffset: {
                width: 0,
                height: val * 20,
            },
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
            <NumberSelector
                minValue={0}
                maxValue={999}
                value={val}
                onValueChange={(e) => setVal(e)}
                style={numberSelectorStyle}
            />
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
