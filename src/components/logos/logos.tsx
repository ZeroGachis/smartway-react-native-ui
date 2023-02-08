import React from 'react';
import { SmallLogo } from './SmallLogo';
import { MediumLogo } from './MediumLogo';


interface Props {
    size?: 'small' | 'medium';
}

const Logo = ({ size = 'medium' }: Props) => {
    if (size === 'small') {
        return <SmallLogo />;
    } else {
        return <MediumLogo />;
    }
};

export default Logo;
