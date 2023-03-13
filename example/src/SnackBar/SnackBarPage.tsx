import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, SnackBar } from 'smartway-react-native-ui';

export const SnackBarPage = () => {
    const [isVisible, setVisible] = useState<boolean>(false);

    const message1 =
        'Single line of text may be a long text on multiple line. It’s possible with a short action.';

    return (
        <View style={{ flex: 1 }}>
            <Button onClick={() => setVisible(true)}>open SnackBar</Button>
            <SnackBar
                visible={isVisible}
                actionLabel="Action"
                onPress={() => setVisible(false)}
                withIcon
                message={message1}
            />

            <SnackBar
                visible={isVisible}
                actionLabel="Long Action"
                onPress={() => setVisible(false)}
                message={message1}
            />
        </View>
    );
};
