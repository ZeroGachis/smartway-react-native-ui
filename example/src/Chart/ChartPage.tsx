import React from 'react';
import { StyleSheet } from 'react-native';
import { LineChart, Body, Card, useTheme, Screen } from 'smartway-react-native-ui';

export const ChartPage = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: theme.sw.spacing.l,
            padding: theme.sw.spacing.l,
        },
        header: {
            color: theme.sw.colors.neutral[900],
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'stretch',
        },
        chartLabels: {
            color: theme.sw.colors.neutral['500'],
            fontFamily: theme.fonts.default.fontFamily,
            fontSize: 14,
        },
    });

    const data = [0, 10, 8, 58, 56, 78, 58, 56, 78, 74, 98, 74];

    const labels = [
        'Aout',
        'Sep.',
        'Oct.',
        'Nov.',
        'Déc.',
        'Jan.',
        'Fév.',
        'Mars',
        'Avr.',
        'Mai.',
        'Juin',
        'Juill.',
    ];
    return (
        <Screen
            style={{
                paddingTop: theme.sw.spacing.m,
                marginTop: 0,
                backgroundColor: theme.sw.colors.neutral[300],
            }}
        >
            <Card style={styles.wrapper}>
                <Body style={styles.header} size="B1" weight="semi-bold">
                    Vente annuelle
                </Body>
                <LineChart
                    data={data.map((_) => {
                        return { value: _ };
                    })}
                    height={160}
                    width={650}
                    initialSpacing={20}
                    spacing={55}
                    endSpacing={15}
                    color1={theme.sw.colors.primary.main}
                    curved={true}
                    noOfSections={4}
                    xAxisLabelTextStyle={styles.chartLabels}
                    yAxisTextStyle={styles.chartLabels}
                    hideDataPoints={true}
                    xAxisThickness={0}
                    yAxisThickness={0}
                    xAxisLabelTexts={labels}
                />
            </Card>
        </Screen>
    );
};
