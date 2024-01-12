import { NumberValidator } from './NumberValidator';

describe('NumberValidator', () => {
    let validator: NumberValidator;

    beforeEach(() => {
        validator = new NumberValidator(-10, 10, true);
    });

    describe('allowNegatives', () => {
        it('should return true when minValue is less than 0', () => {
            const validator = new NumberValidator(-1, 10, true);
            expect(validator.allowNegatives()).toBe(true);
        });

        it('should return false when minValue is not less than 0', () => {
            const validator = new NumberValidator(0, 10, true);
            expect(validator.allowNegatives()).toBe(false);
        });
    });

    describe('validateFormat', () => {
        test('validateFormat should return true for valid numbers', () => {
            expect(validator.validateFormat('5')).toBe(true);
            expect(validator.validateFormat('-5')).toBe(true);
            expect(validator.validateFormat('5.5')).toBe(true);
            expect(validator.validateFormat('-5.5')).toBe(true);
        });

        test('validateFormat should return false for invalid numbers', () => {
            expect(validator.validateFormat('abc')).toBe(false);
            expect(validator.validateFormat('5.5.5')).toBe(false);
        });
    });

    describe('validateMinMax', () => {
        test('validateMinMax returns true for valid numbers', () => {
            expect(validator.validateMinMax('5')).toBe(true);
        });

        test('validateMinMax returns false for numbers out of range', () => {
            expect(validator.validateMinMax('15')).toBe(false);
        });

        test('validateMinMax returns true for negative numbers when allowed', () => {
            expect(validator.validateMinMax('-5')).toBe(true);
        });

        test('validateMinMax returns false for negative numbers when not allowed', () => {
            validator = new NumberValidator(0, 10, true);
            expect(validator.validateMinMax('-5')).toBe(false);
        });

        test('validateMinMax returns true for undefined text', () => {
            expect(validator.validateMinMax(undefined)).toBe(true);
        });

        test('validateMinMax returns true for "-" when negatives are allowed', () => {
            expect(validator.validateMinMax('-')).toBe(true);
        });

        test('validateMinMax returns false for "-" when negatives are not allowed', () => {
            validator = new NumberValidator(0, 10, true);
            expect(validator.validateMinMax('-')).toBe(false);
        });
    });
});
