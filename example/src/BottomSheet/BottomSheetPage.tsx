import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheet, Button, useTheme } from 'smartway-react-native-ui';

export const BottomSheetPage = () => {
    const theme = useTheme();
    const [isOpened, setOpened] = useState(false);

    const openBottomSheet = () => {
        setOpened(true);
    };
    const closeBottomSheet = () => {
        setOpened(false);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            padding: 16,
        },
        button: {
            marginVertical: theme.sw.spacing.xs,
        },
    });

    return (
        <View style={styles.container}>
            <Button onClick={openBottomSheet}>Open bottom sheet</Button>
            <BottomSheet
                title={'title'}
                titleProps={{ size: 'h2', style: { marginBottom: 12, textAlign: 'center' } }}
                onClose={closeBottomSheet}
                isOpened={isOpened}
            >
                <View>
                    <Button onClick={closeBottomSheet} style={styles.button} mode="filled">
                        Close Bottom Sheet
                    </Button>
                    <Button style={styles.button} mode="filled">
                        Option 1
                    </Button>
                    <Button style={styles.button} mode="filled">
                        Option 2
                    </Button>
                    <Button style={styles.button} mode="filled">
                        Option 3
                    </Button>
                </View>
            </BottomSheet>
        </View>
    );
};
