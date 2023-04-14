import React from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../..//styles/themes';
import { Label } from '../label/Label';
import { Body } from '../typography/Body';

export interface ProductProps {
    label: string;
    scanDate: string;
    initialPrice: string;
    barcode: string;
    quantity: number;
    discount: string;
    finalPrice: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    testID?: string;
}

export const Product = ({
    label,
    scanDate,
    initialPrice,
    barcode,
    quantity,
    discount,
    finalPrice,
    onPress,
    style,
    testID,
}: ProductProps) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            paddingVertical: theme.sw.spacing.m,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: theme.sw.colors.neutral[200],
        },
        picture: {
            backgroundColor: theme.sw.colors.neutral[300],
            height: 64,
            width: 64,
            borderRadius: 8,
            flexDirection: 'row',
            marginRight: theme.sw.spacing.s,
        },
        quantityContainer: {
            alignSelf: 'flex-end',
            padding: theme.sw.spacing.xs,
            paddingHorizontal: theme.sw.spacing.xs,
            margin: theme.sw.spacing.xs,
            backgroundColor: theme.sw.colors.neutral[50],
            borderRadius: 8,
        },
        label: {
            marginBottom: theme.sw.spacing.xs,
        },
        barcodePrice: {
            marginBottom: theme.sw.spacing.s,
            color: theme.sw.colors.neutral[500],
        },
        labels: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        discount: {
            marginRight: theme.sw.spacing.xs,
        },
        finalPrice: {
            marginRight: theme.sw.spacing.xs,
        },
        date: {
            color: theme.sw.colors.neutral[500],
            alignSelf: 'center',
        },
    });
    return (
        <Pressable onPress={onPress} testID={testID} style={[styles.container, style]}>
            <View style={styles.picture}>
                <View style={styles.quantityContainer}>
                    <Body size="small">{`x${quantity}`}</Body>
                </View>
            </View>
            <View style={{ flexShrink: 1 }}>
                <Body numberOfLines={1} style={styles.label} size="semi-bold">
                    {label}
                </Body>

                <Body style={styles.barcodePrice} size="small">
                    {`${barcode}  •  ${initialPrice}`}
                </Body>

                <View style={styles.labels}>
                    <View style={{ flexDirection: 'row' }}>
                        <Label
                            style={styles.discount}
                            type="soft"
                            labelColor="secondary"
                            text={discount}
                        />
                        <Label
                            style={styles.finalPrice}
                            type="soft"
                            labelColor="secondary"
                            text={finalPrice}
                        />
                    </View>

                    <Body size="small" style={styles.date}>
                        {scanDate}
                    </Body>
                </View>
            </View>
        </Pressable>
    );
};
