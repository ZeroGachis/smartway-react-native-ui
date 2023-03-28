import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';

interface Props {
    children?: ReactNode;
    style?: ViewStyle;
}

export const Card = ({ children, style }: Props) => {
    const theme = useTheme();
    const cardStyle: StyleProp<ViewStyle> = {
        backgroundColor: theme.sw.colors.neutral[50],
        width: '100%',
        alignItems: 'center',
        borderRadius: 12,
        padding: theme.sw.spacing.m,
        elevation: 1,
        ...style,
    };

    return <View style={cardStyle}>{children}</View>;
};
