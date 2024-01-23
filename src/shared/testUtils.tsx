import React, { ReactElement } from 'react';
import {
    RenderOptions,
    render as rtlRender,
} from '@testing-library/react-native';
import { ThemeProvider } from '../styles/themes'; // Replace with the actual path to your ThemeProvider

const uiRender = (ui: ReactElement, options?: RenderOptions) => {
    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <ThemeProvider>{children}</ThemeProvider>
    );

    return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react-native';
export { uiRender as render };
