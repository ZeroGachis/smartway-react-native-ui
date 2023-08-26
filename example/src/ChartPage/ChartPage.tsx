import React, { useEffect, useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { Chart, Screen } from 'smartway-react-native-ui';

export const ChartPage = () => {
    const [invertData, setInvertData] = useState(false);
    const [dataSets, setDataSets] = useState([
        25, 70, 159, 150, 170, 200, 150, 130, 150, 117, 118, 125,
    ]);
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

    useEffect(() => {
        invertData
            ? setDataSets([25, 70, 159, 150, 170, 200, 150, 130, 150, 117, 118, 125].reverse())
            : setDataSets([25, 70, 159, 150, 170, 200, 150, 130, 150, 117, 118, 125]);
    }, [invertData]);

    const styles = StyleSheet.create({
        container: {
            paddingTop: 16,
            backgroundColor: 'white',
            marginHorizontal: 8,
        },
    });

    return (
        <Screen style={styles.container}>
            <View>
                <Switch value={invertData} onValueChange={() => setInvertData(!invertData)} />
            </View>
            <Chart labels={labels} dataSets={dataSets} />
        </Screen>
    );
};
