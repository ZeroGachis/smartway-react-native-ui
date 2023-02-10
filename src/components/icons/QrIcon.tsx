import React from "react";
import { SvgXml } from "react-native-svg";
import type { IconProps } from "./IconProps";

export const QrIcon = ({ width, height }: IconProps) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 2H4.5V4.5H7V7V9.5H4.5V12H7V14.5H9.5V17H12V19.5H14.5V17H12V14.5H14.5V12V9.5H12H9.5V7V4.5H12V2H14.5V4.5V7H17V9.5H19.5H22V12H19.5H17V14.5V17V19.5H22V22H4.5H2V19.5V2ZM12 14.5H9.5V12H12V14.5ZM9.5 4.5H7V2H9.5V4.5ZM7 19.5V17H4.5V19.5H7ZM17 2H19.5V4.5H17V2ZM19.5 4.5H22V7H19.5V4.5ZM22 14.5H19.5V17H22V14.5Z" fill="#212B36"/>
</svg>`;

    return <SvgXml xml={xml} width={width} height={height} />;
};
