import { NumberValidator } from './NumberValidator';

describe('NumberValidator', () => {
    const commonValidator = (decimal: boolean) => {
        describe('allowNegatives', () => {
            it('should return true when minValue is less than 0', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.allowNegatives()).toBe(true);
            });

            it('should return false when minValue is not less than 0', () => {
                const validator = new NumberValidator(0, 10, decimal);
                expect(validator.allowNegatives()).toBe(false);
            });
        });

        describe('validateFormat', () => {
            it('should return true for valid integer numbers', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateFormat('')).toBe(true);
                expect(validator.validateFormat('-')).toBe(true);
                expect(validator.validateFormat('5')).toBe(true);
                expect(validator.validateFormat('-5')).toBe(true);
                expect(validator.validateFormat('-0')).toBe(true);
            });

            it('should return false for invalid numbers', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateFormat('abc')).toBe(false);
                expect(validator.validateFormat('01')).toBe(false);
                expect(validator.validateFormat('5.5.5')).toBe(false);
                expect(validator.validateFormat('00.5')).toBe(false);
                expect(validator.validateFormat('01.0')).toBe(false);
                expect(validator.validateFormat('0.51')).toBe(false);
                expect(validator.validateFormat('0.50')).toBe(false);
            });
        });

        describe('validateMinMax', () => {
            it('should return true for valid numbers', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateMinMax('5')).toBe(true);
            });

            it('should return false for numbers out of range', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateMinMax('15')).toBe(false);
                expect(validator.validateMinMax('-2')).toBe(false);
            });

            it('should return true for negative numbers when allowed', () => {
                const validator = new NumberValidator(-5, 10, decimal);
                expect(validator.validateMinMax('-5')).toBe(true);
            });

            it('should return false for negative numbers when out of range', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateMinMax('-5')).toBe(false);
            });

            it('should return true for undefined text', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateMinMax(undefined)).toBe(true);
            });

            it('should return true for "-" when negatives are allowed', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateMinMax('-')).toBe(true);
            });

            it('should return false for "-" when negatives are not allowed', () => {
                const validator = new NumberValidator(0, 10, decimal);
                expect(validator.validateMinMax('-')).toBe(false);
            });
        });
    };

    describe.each([[true], [false]])('Decimal is %s', commonValidator);
    describe('Decimal validator', () => {
        const decimal = true;

        describe('validateFormat', () => {
            it('should return true for valid decimal numbers', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateFormat('5.5')).toBe(true);
                expect(validator.validateFormat('-5.5')).toBe(true);
                expect(validator.validateFormat('-0.1')).toBe(true);
                expect(validator.validateFormat('-0.0')).toBe(true);
                expect(validator.validateFormat('-5.0')).toBe(true);
            });
        });
    });

    describe('integer validator', () => {
        const decimal = false;
        describe('validateFormat', () => {
            it('should return false for valid decimal numbers', () => {
                const validator = new NumberValidator(-1, 10, decimal);
                expect(validator.validateFormat('5.5')).toBe(false);
                expect(validator.validateFormat('-5.5')).toBe(false);
                expect(validator.validateFormat('-0.1')).toBe(false);
                expect(validator.validateFormat('-0.0')).toBe(false);
                expect(validator.validateFormat('-5.0')).toBe(false);
            });
        });
    });
});
