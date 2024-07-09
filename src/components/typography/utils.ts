import { Font } from '@zerogachis/smartway-design-token/dist/cjs/src/Tokens/TokensType';

export const getFontWeight = (fontWeight: number | undefined) => {
    if (fontWeight === 400) {
        return 'Regular';
    } else if (fontWeight === 500) {
        return 'Medium';
    } else if (fontWeight === 600) {
        return 'SemiBold';
    } else if (fontWeight === 700) {
        return 'Bold';
    }
    return 'Regular';
};

export const getFont = (font?: Font) => {
    if (font !== undefined) {
        return font.fontFamily.replace(' ', '') + '-' + getFontWeight(font.fontWeight);
    }
    return 'PublicSans-Regular';
};
