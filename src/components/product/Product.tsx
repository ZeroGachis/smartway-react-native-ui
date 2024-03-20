import React from 'react';
import {
    Pressable,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native';
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
}: ProductProps) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            paddingVertical: theme.sw.spacing.s,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: theme.sw.color.neutral[200],
        },
        picture: {
            backgroundColor: theme.sw.color.neutral[300],
            height: 64,
            width: 64,
            borderRadius: 8,
            flexDirection: 'row',
            // TODO: use new tokens
            marginRight: 12,
        },
        quantityContainer: {
            alignSelf: 'flex-end',
            padding: theme.sw.spacing.xxs,
            paddingHorizontal: theme.sw.spacing.xxs,
            margin: theme.sw.spacing.xxs,
            backgroundColor: theme.sw.color.neutral[0],
            borderRadius: 8,
        },
        label: {
            marginBottom: theme.sw.spacing.xxs,
        },
        barcodePrice: {
            // TODO: use new tokens
            marginBottom: 12,
            color: theme.sw.color.neutral[500],
        },
        labels: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        discount: {
            marginRight: theme.sw.spacing.xxs,
        },
        finalPrice: {
            marginRight: theme.sw.spacing.xxs,
        },
        date: {
            color: theme.sw.color.neutral[500],
            alignSelf: 'center',
        },
    });
    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <View style={styles.picture}>
                <View style={styles.quantityContainer}>
                    <Body size='B3'>{`x${quantity}`}</Body>
                </View>
            </View>
            <View style={{ flexShrink: 1 }}>
                <Body
                    numberOfLines={1}
                    style={styles.label}
                    size='B1'
                    weight='semi-bold'
                >
                    {label}
                </Body>

                <Body style={styles.barcodePrice} size='B3'>
                    {`${barcode}  •  ${initialPrice}`}
                </Body>

                <View style={styles.labels}>
                    <View style={{ flexDirection: 'row' }}>
                        <Label
                            style={styles.discount}
                            status='secondary'
                            variant='soft'
                            text={discount}
                        />
                        <Label
                            style={styles.finalPrice}
                            status='secondary'
                            variant='soft'
                            text={finalPrice}
                        />
                    </View>

                    <Body size='B2' style={styles.date}>
                        {scanDate}
                    </Body>
                </View>
            </View>
        </Pressable>
    );
};
