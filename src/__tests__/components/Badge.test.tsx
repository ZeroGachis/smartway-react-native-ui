import React from 'react';
import { screen, render } from '../../shared/testUtils';

import { Badge } from '../../components/badge/Badge';

describe('MODULE | Badge', () => {
    describe('Given a `number`', () => {
        it('should display it', () => {
            render(<Badge number={100} />);

            expect(screen.getByText('100')).toBeOnTheScreen();
        });
    });
    describe("Given a `number` and a `maxDigits` greater than number's total digit", () => {
        it('should display a truncated `number`', () => {
            render(<Badge number={100} maxDigits={2} />);

            expect(screen.getByText('99+')).toBeOnTheScreen();
        });
    });
    describe("Given a `number` and a `maxDigits` smaller or equal than number's total digit'", () => {
        it('should display the entire `number`', () => {
            render(<Badge number={88} maxDigits={2} />);

            expect(screen.getByText('88')).toBeOnTheScreen();
        });
    });
});
