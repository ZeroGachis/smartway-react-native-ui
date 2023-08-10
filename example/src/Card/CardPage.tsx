import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Body, Button, Card, Headline, Icon, Screen, useTheme } from 'smartway-react-native-ui';

export const CardPage = () => {
    const theme = useTheme();
    const style = StyleSheet.create({
        container: {
            paddingTop: theme.sw.spacing.m,
            marginTop: 0,
            backgroundColor: theme.sw.colors.neutral[300],
        },
        card: {
            paddingHorizontal: theme.sw.spacing.m,
            paddingVertical: theme.sw.spacing.l,
        },
        textContent: {
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.sw.spacing.xl,
        },
        iconContainer: {
            alignItems: 'center',
            height: 100,
            justifyContent: 'center',
            width: 100,
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
        bodyBold: {
            fontFamily: 'PublicSans-SemiBold',
            color: theme.sw.colors.neutral[700],
        },
        button: {
            marginTop: theme.sw.spacing.l,
        },
    });
    return (
        <Screen style={style.container}>
            <Card style={style.card}>
                <View style={style.iconContainer}>
                    <Icon name="qr" size={48} />
                </View>
                <View style={style.textContent}>
                    <Body style={{ ...style.body, ...style.bodyBold }}>welcome</Body>
                    <Headline size="h3" style={style.title}>
                        {}
                    </Headline>
                    <Body style={style.body}>Update your data</Body>
                </View>
                <Button
                    testID="tag_enrollment_start_button"
                    style={style.button}
                    mode="filled"
                    onPress={() => {
                        Alert.alert('Button pressed !');
                    }}
                >
                    start
                </Button>
            </Card>
        </Screen>
    );
};
