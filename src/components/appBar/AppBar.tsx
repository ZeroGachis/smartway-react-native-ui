import React, { ReactNode } from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import type { ViewStyle } from 'react-native';
import { Headline } from '../typography/Headline';
import { Button } from '../buttons/Button';
import type { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';

interface Props {
    size?: 'small' | 'medium' | 'large' | 'center-aligned';
    title: ReactNode;
    onTitlePress?: () => void;
    subtitle?: string;
    onSubtitlePress?: () => void;
    firstIconName?: IconSource;
    onFirstIconPress?: () => void;
    secondIconName?: IconSource;
    onSecondIconPress?: () => void;
    onBack?: () => void;
    style?: ViewStyle;
}

export const AppBar = ({
    size = 'small',
    title,
    onTitlePress,
    subtitle,
    onSubtitlePress,
    firstIconName,
    secondIconName,
    onFirstIconPress,
    onSecondIconPress,
    onBack,
    style,
}: Props) => {
    const theme = useTheme();

    const getIconColor = () => {
        return theme.sw.colors.neutral[600];
    };
    return (
        <Appbar.Header mode={size} style={style}>
            {onBack !== undefined && <Appbar.BackAction onPress={onBack} />}
            <Appbar.Content
                title={typeof title === 'string' ? <Headline size="h2">{title}</Headline> : title}
                onPress={onTitlePress}
            />
            {subtitle !== undefined && (
                <Button mode="text" onClick={onSubtitlePress}>
                    {subtitle}
                </Button>
            )}
            {secondIconName !== undefined && (
                <Appbar.Action
                    icon={secondIconName}
                    onPress={onSecondIconPress}
                    color={getIconColor()}
                />
            )}
            {firstIconName !== undefined && (
                <Appbar.Action
                    icon={firstIconName}
                    onPress={onFirstIconPress}
                    color={getIconColor()}
                />
            )}
        </Appbar.Header>
    );
};
