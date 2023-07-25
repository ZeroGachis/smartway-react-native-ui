import type { IconName } from '../icons/IconProps';
import type { BaseButtonProps } from './BaseButtonProps';

export interface BaseIconButtonProps extends BaseButtonProps {
    name: IconName;
    size?: number;
}
