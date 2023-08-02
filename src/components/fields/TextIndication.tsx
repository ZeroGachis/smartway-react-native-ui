import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { Icon } from '../icons/Icon';
import { useTheme } from '../../styles/themes';
import type { IconName } from '../icons/IconProps';
export type TextType = 'error' | 'warning' | 'information';
interface Props {
    text: string;
    type: TextType;
    icon?: IconName;
    iconSize?: number;
    iconColor?: string;
}
export const TextIndication = ({ text, type, icon, iconSize, iconColor }: Props) => {
    const theme = useTheme();

    const getTextColor = () => {
        switch (type) {
            case 'information':
                return theme.sw.colors.neutral[600];
            case 'warning':
                return theme.sw.colors.warning[400];
            case 'error':
                return theme.sw.colors.error['main'];
        }
    };

    const container: ViewStyle = {
        flexDirection: 'row',
        marginTop: theme.sw.spacing.xs,
        alignItems: 'center',
    };

    const textStyle: TextStyle = {
        marginLeft: theme.sw.spacing.xs,
        color: getTextColor(),
    };

    return (
        <View style={container}>
            {icon && <Icon color={iconColor} name={icon} size={iconSize} />}
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};
