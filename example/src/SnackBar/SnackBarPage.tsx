import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, SnackBar } from 'smartway-react-native-ui';

export const SnackBarPage = () => {
    const [isVisible, setVisible] = useState<boolean>(false);

    const message =
        'Single line of text may be a long text on multiple line. It’s possible with a short action.';

    return (
        <View style={{ flex: 1 }}>
            <Button onClick={() => setVisible(true)}>open SnackBar</Button>
            <SnackBar
                visible={isVisible}
                actionLabel="Action"
                onDismiss={() => setVisible(false)}
                callBack={() => console.log('callBack')}
                iconName="close"
                message={message}
            />
            <SnackBar
                visible={isVisible}
                actionLabel="Longer action"
                onDismiss={() => setVisible(false)}
                callBack={() => console.log('callBack')}
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
