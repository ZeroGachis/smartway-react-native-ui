import React from 'react';
import { Product, Screen, useTheme } from 'smartway-react-native-ui';

export const ProductPage = () => {
    const theme = useTheme();

    return (
        <Screen style={{ backgroundColor: theme.sw.colors.neutral[50] }}>
            <Product
                label="Crème dessert chocolat avec billes et chocolat avec billes et"
                barcode="978020137962"
                scanDate={'16:40'}
                discount={'30%'}
                finalPrice={'1.75€'}
                initialPrice={'2,50€'}
                quantity={3}
                onPress={() => {
                    return;
                }}
            />
            <Product
                label="Crème dessert chocolat avec billes et chocolat avec billes et"
                barcode="978020137962"
                scanDate={'16:40'}
                discount={'30%'}
                finalPrice={'1.75€'}
                initialPrice={'2,50€'}
                quantity={3}
                onPress={() => {
                    return;
                }}
            />
            <Product
                label="Crème dessert chocolat avec billes et chocolat avec billes et"
                barcode="978020137962"
                scanDate={'16:40'}
                discount={'30%'}
                finalPrice={'1.75€'}
                initialPrice={'2,50€'}
                quantity={3}
                onPress={() => {
                    return;
                }}
            />
        </Screen>
    );
};
