import { ComputeCrementedValue } from './NumberSelector';
import { NumberValidator } from '../numberField/NumberValidator';

describe('ComputeCrementedValue', () => {
    it('should correctly compute the incremented value within the validator limits', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 5;
        const step = 2;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(7);
    });
    it('should not exceed the max value of the validator', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 9;
        const step = 2;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(10);
    });
    it('should not go below the min value of the validator', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 1;
        const step = -2;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(0);
    });
    it('should not brake with a zero initial value on increment', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 0;
        const step = 1;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(1);
    });
    it('should not brake with a zero initial value on decrement', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 0;
        const step = -1;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(0);
    });
    it('should correctly compute the incremented value within the validator limits for decimals', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 5.2;
        const step = 2;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(7);
    });
    it('should correctly compute the two steps incremented value within the validator limits for decimals', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 5.2;
        const step = 1;
        const result = ComputeCrementedValue(value, step, validator);
        expect(result).toBe(6);
        const newresult = ComputeCrementedValue(result, step, validator);
        expect(newresult).toBe(7);
    });
    it('should correctly compute the two steps incremented value within the validator limits for decimals with decimal max', () => {
        const validator = new NumberValidator(0, 6.5, false);
        const value = 5.2;
        const step = 1;
        const result = ComputeCrementedValue(value, step, validator);
        expect(result).toBe(6);
        const newresult = ComputeCrementedValue(result, step, validator);
        expect(newresult).toBe(6.5);
    });
    it('should correctly compute the decremented value within the validator limits for decimals', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 5.2;
        const step = -1;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(5);
    });
    it('should correctly compute the two steps decremented value within the validator limits for decimals', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 5.2;
        const step = -1;
        const result = ComputeCrementedValue(value, step, validator);
        expect(result).toBe(5);
        const newresult = ComputeCrementedValue(result, step, validator);
        expect(newresult).toBe(4);
    });
    it('should correctly compute the two steps decremented value within the validator limits for decimals with decimal min', () => {
        const validator = new NumberValidator(4.3, 10, false);
        const value = 5.2;
        const step = -1;
        const result = ComputeCrementedValue(value, step, validator);
        expect(result).toBe(5);
        const newresult = ComputeCrementedValue(result, step, validator);
        expect(newresult).toBe(4.3);
    });
    it('should correctly compute the decremented value within the validator limits for decimals', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 5.2;
        const step = -2;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(4);
    });
    it('should not exceed the max value of the validator for decimals', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 9.2;
        const step = 2;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(10);
    });
    it('should not go below the min value of the validator for decimals', () => {
        const validator = new NumberValidator(0, 10, false);
        const value = 1.4;
        const step = -2;

        const result = ComputeCrementedValue(value, step, validator);

        expect(result).toBe(0);
    });
});
