import React from 'react';
import { OrderItem, Screen, useTheme } from 'smartway-react-native-ui';

export const OrderItemPage = () => {
    const theme = useTheme();

    return (
        <Screen style={{ backgroundColor: theme.sw.colors.neutral[50] }}>
            <OrderItem
                label="H2S3 Avocat tropical vrac"
                cug="420603"
                tags={['Nouvel article']}
                purchasePrice={'1.75€'}
                retailPrice={'2.50€'}
                pcb={'3PCB'}
                marginRate={'29,38%'}
            />
            <OrderItem
                label="Bio Champignon portobello 2P H..."
                cug="18388"
                purchasePrice={'1.12€'}
                retailPrice={'1.79€'}
                pcb={'4PCB'}
                marginRate={'33,33%'}
            />
            <OrderItem
                label="Bio Banane ruban 5 doigts DMA x"
                cug="860369"
                tags={['Promo', 'Nouveau prix']}
                purchasePrice={'1.43€'}
                retailPrice={'1.99€'}
                pcb={'22PCB'}
                marginRate={'22,93%'}
            />
        </Screen>
    );
};
