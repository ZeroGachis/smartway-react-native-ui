import React from 'react';
import type { IconProps } from './IconProps';
import { QrIcon } from './QrIcon';

export const Icon = (props: IconProps) => {
    if (props.name === 'qr') {
        return <QrIcon {...props} />;
    } else {
        throw new Error(`Icon ${props.name} does not exist`);
    }
};
