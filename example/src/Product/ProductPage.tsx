import React, { useState } from 'react';

import { Body, BottomSheet, Product, Screen, useTheme } from 'smartway-react-native-ui';

export const ProductPage = () => {
    const theme = useTheme();
    const [isOpened, setOpened] = useState<booelan>(false);

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
                onPress={() => setOpened(true)}
            />
            <Product
                label="Crème dessert chocolat avec billes et chocolat avec billes et"
                barcode="978020137962"
                scanDate={'16:40'}
                discount={'30%'}
                finalPrice={'1.75€'}
                initialPrice={'2,50€'}
                quantity={3}
                onPress={() => setOpened(true)}
            />
            <Product
                label="Crème dessert chocolat avec billes et chocolat avec billes et"
                barcode="978020137962"
                scanDate={'16:40'}
                discount={'30%'}
                finalPrice={'1.75€'}
                initialPrice={'2,50€'}
                quantity={3}
                onPress={() => setOpened(true)}
            />
            <BottomSheet isOpened={isOpened} onClose={() => setOpened(false)}>
                <Body>You opened bottom sheet!</Body>
            </BottomSheet>
        </Screen>
    );
};
