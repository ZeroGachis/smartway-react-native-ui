import React from 'react';
import iconSet from '../../assets/fonts/selection.json';
import IconMoon from 'react-native-icomoon';
import type { IconName } from './IconProps';

interface Props {
    name: IconName;
    size: number;
}

export const Icon = ({ name, size }: Props) => {
    return <IconMoon iconSet={iconSet} name={name} size={size} />;
};
