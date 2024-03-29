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

export const TextIndication = ({
    text,
    type,
    icon,
    iconSize,
    iconColor,
}: Props) => {
    const theme = useTheme();

    const getTextColor = () => {
        switch (type) {
            case 'information':
                return theme.sw.color.neutral[600];
            case 'warning':
                // TODO: use new tokens
                return '#f59e0b';
            case 'error':
                return theme.sw.color.error[500];
        }
    };

    const container: ViewStyle = {
        flexDirection: 'row',
        marginTop: theme.sw.spacing.xs,
        alignItems: 'center',
    };

    const textStyle: TextStyle = {
        marginLeft: theme.sw.spacing.xxs,
        color: getTextColor(),
    };

    return (
        <View style={container}>
            {icon && <Icon color={iconColor} name={icon} size={iconSize} />}
            <Text style={textStyle}>{text}</Text>
        </View>
    );
};
