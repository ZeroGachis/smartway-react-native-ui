import React, { PropsWithChildren } from 'react';
import { Screen, ThemeProvider } from 'smartway-react-native-ui';

type SmartwayDecoratorProps = PropsWithChildren;

export const SmartwayDecorator = ({ children }: SmartwayDecoratorProps) => {
    return (
        <ThemeProvider>
            <Screen>{children}</Screen>
        </ThemeProvider>
    );
};
