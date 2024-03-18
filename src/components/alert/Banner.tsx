import React from 'react';
import Alert, { AlertProps, useAlert } from './Alert';

export interface BannerProps extends Omit<AlertProps, 'style'> {}

const Banner = (props: BannerProps) => <Alert {...props} />;

export const useBanner = useAlert;
export default Banner;
