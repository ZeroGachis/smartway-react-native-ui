import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, SnackBar } from 'smartway-react-native-ui';

export const SnackBarPage = () => {
    const [isVisible, setVisible] = useState<boolean>(false);

    const message =
        'Single line of text may be a long text on multiple line. It’s possible with a short action.';

    return (
        <View style={{ flex: 1 }}>
            <Button onPress={() => setVisible(true)}>open SnackBar</Button>
            <SnackBar
                visible={isVisible}
                onDismiss={() => setVisible(false)}
                iconName="close"
                message={message}
            />
            <SnackBar
                visible={isVisible}
                action={{
                    label: 'Longer action',
                    onPress: () => {
                        console.log('callBack');
                    },
                }}
                onDismiss={() => setVisible(false)}
                iconName="close"
                message={message}
            />
            <SnackBar
                visible={isVisible}
                iconName="close"
                onDismiss={() => setVisible(false)}
                message={message}
            />
            <SnackBar visible={isVisible} onDismiss={() => setVisible(false)} message={message} />
        </View>
    );
};
