import React from 'react';
import iconSet from '../../assets/fonts/selection.json';
import IconMoon from 'react-native-icomoon';
import type { IconName } from './IconProps';
import { useTheme } from '../../styles/themes';

interface Props {
    name: IconName;
    size?: number;
    color?: string;
}

export const Icon = ({ name, size = 16, color }: Props) => {
    const theme = useTheme();
    return (
        <IconMoon
            color={color ? color : theme.sw.colors.neutral[800]}
            iconSet={iconSet}
            name={name}
            size={size}
        />
    );
};
