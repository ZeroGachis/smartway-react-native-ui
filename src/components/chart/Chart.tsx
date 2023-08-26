import React from 'react';
import { StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import type { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import { Card } from '../card/Card';
import { useTheme } from '../../styles/themes';
import { Body } from '../typography/Body';

type ChartProps = {
    labels: string[];
    dataSets: number[];
};

export const Chart = ({ labels, dataSets }: ChartProps) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        header: {
            color: theme.sw.colors.neutral[900],
            textAlign: 'left',
            margin: 24,
            marginBottom: 24,
        },
        chart: {
            alignItems: 'center',
            marginRight: 12,
            marginBottom: 24,
        },
    });

    const data = {
        labels: labels,
        datasets: [
            {
                data: dataSets,
                color: () => `rgba(24, 165, 134, 1)`, // optional
                strokeWidth: 2,
            },
        ],
    };

    const chartConfig: ChartConfig = {
        backgroundGradientFrom: theme.sw.colors.neutral[50],
        backgroundGradientTo: theme.sw.colors.neutral[50],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: () => theme.sw.colors.neutral[600],
        decimalPlaces: 0,
        propsForVerticalLabels: {
            fontFamily: 'PublicSans-Regular',
            fontSize: 14,
            dy: 9,
            dx: 20,
        },
        propsForHorizontalLabels: {
            fontFamily: 'PublicSans-Regular',
            fontSize: 14,
            dx: -6,
            dy: 2,
        },
        propsForBackgroundLines: {
            strokeDasharray: 4,
        },
    };
    return (
        <Card style={{ alignItems: undefined, padding: 0, margin: 0 }}>
            <Body style={styles.header} size="B1" weight="semi-bold">
                Vente annuelle
            </Body>
            <LineChart
                data={data}
                width={752 - 24}
                height={218}
                chartConfig={chartConfig}
                withDots={false}
                withShadow={false}
                fromZero={true}
                withVerticalLines={false}
                bezier
                style={styles.chart}
            />
        </Card>
    );
};
