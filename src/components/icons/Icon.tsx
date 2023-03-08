import React from 'react';
import iconSet from '../../assets/fonts/selection.json';
import IconMoon from 'react-native-icomoon';
import type { IconName } from './IconProps';

interface Props {
    name: IconName;
    size: number;
    color?: string;
}

export const Icon = ({ name, size, color = '#212B36' }: Props) => {
    return <IconMoon color={color} iconSet={iconSet} name={name} size={size} />;
};
