/* eslint-disable no-useless-escape */
export class NumberValidator {
    parser: (value: string) => number;
    regex: RegExp;

    constructor(
        public minValue: number,
        public maxValue: number,
        public allowDecimal: boolean,
        private blockOutrange: boolean = false,
    ) {
        this.parser = allowDecimal ? parseFloat : parseInt;
        const decimalRegex =
            minValue !== undefined && minValue < 0
                ? /^-?(0|([1-9]\d*))?([\.]\d?)?$/
                : /^(0|([1-9]\d*))?([\.]\d?)?$/;

        const integerRegex =
            minValue !== undefined && minValue < 0
                ? /^-?(0|([1-9]\d*))?$/
                : /^(0|([1-9]\d*))?$/;

        this.regex = allowDecimal ? decimalRegex : integerRegex;
    }

    endValidation(text: string | undefined): boolean {
        return Boolean(text);
    }

    allowNegatives(): boolean {
        return this.minValue < 0;
    }

    isAccepted(text: string | undefined): boolean {
        return this.validateFormat(text);
    }

    isValid(text: string | undefined): boolean {
        return this.validateMinMax(text);
    }

    validate(text: string | undefined): boolean {
        return this.validateMinMax(text) && this.validateFormat(text);
    }

    validateFormat(text: string | undefined): boolean {
        return (
            this.regex.test(text ?? '') &&
            (this.blockOutrange ? this.validateMinMax(text) : true)
        );
    }

    validateMinMax(text: string | undefined): boolean {
        if (
            !text ||
            (text === '-' && this.allowNegatives()) ||
            (this.minValue === undefined && this.maxValue === undefined) ||
            (text === '.' && this.allowDecimal)
        ) {
            return true;
        }

        const parsedValue = this.parser(text);
        const isValueWithinRange =
            !Number.isNaN(parsedValue) &&
            (this.minValue !== undefined
                ? parsedValue >= this.minValue
                : true) &&
            (this.maxValue !== undefined ? parsedValue <= this.maxValue : true);

        return isValueWithinRange;
    }
}
