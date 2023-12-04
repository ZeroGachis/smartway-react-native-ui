import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { ThemeProvider } from '../../styles/themes';
import { Badge } from '../../components/badge/Badge';

describe('MODULE | Badge', () => {
    describe('Given a `number`', () => {
        it('should display it', () => {
            render(
                <ThemeProvider>
                    <Badge number={100} />
                </ThemeProvider>,
            );

            expect(screen.getByText('100')).toBeDefined();
        });
    });
    describe("Given a `number` and a `maxDigits` greater than number's total digit", () => {
        it('should display a truncated `number`', () => {
            render(
                <ThemeProvider>
                    <Badge number={100} maxDigits={2} />
                </ThemeProvider>,
            );

            expect(screen.getByText('99+')).toBeDefined();
        });
    });
    describe("Given a `number` and a `maxDigits` smaller or equal than number's total digit'", () => {
        it('should display the entire `number`', () => {
            render(
                <ThemeProvider>
                    <Badge number={88} maxDigits={2} />
                </ThemeProvider>,
            );

            expect(screen.getByText('88')).toBeDefined();
        });
    });
});
