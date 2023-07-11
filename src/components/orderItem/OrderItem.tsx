import React from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../..//styles/themes';
import { Label } from '../label/Label';
import { Body } from '../typography/Body';

export interface OrderItemProps {
    label: string;
    cug: string;
    pcb: string;
    purchasePrice: string;
    tags?: string[];
    retailPrice: string;
    marginRate: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const OrderItem = ({
    label,
    cug,
    pcb,
    purchasePrice,
    tags,
    retailPrice,
    marginRate,
    onPress,
    style,
}: OrderItemProps) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            paddingVertical: theme.sw.spacing.m,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: theme.sw.colors.neutral[200],
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
        cug: {
            marginBottom: theme.sw.spacing.s,
        },
        itemInformations: {
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
    });

    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            <View style={{ flexShrink: 1 }}>
                <Body numberOfLines={1} style={styles.label} size="semi-bold">
                    {label}
                </Body>

                <Body>
                    <Body style={styles.cug} size="small">
                        {`${cug}`}
                    </Body>
                    <Body style={styles.itemInformations} size="small">
                        {` •  ${pcb} • ${purchasePrice} • ${retailPrice} • ${marginRate}`}
                    </Body>
                </Body>

                <View style={styles.labels}>
                    <View style={{ flexDirection: 'row' }}>
                        {tags !== undefined ? (
                            tags.map((tag) => {
                                return (
                                    <Label
                                        style={styles.discount}
                                        type="soft"
                                        labelColor="primary"
                                        text={tag}
                                    />
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </View>
                </View>
            </View>
        </Pressable>
    );
};
