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
                onClose={() => setVisible(false)}
                iconName="close"
                message={message}
            />
            <SnackBar
                visible={isVisible}
                actionLabel="Long Action"
                onClose={() => setVisible(false)}
                message={message}
            />
        </View>
    );
};
