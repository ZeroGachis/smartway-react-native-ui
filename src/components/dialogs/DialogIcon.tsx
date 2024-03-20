import { View } from 'react-native';
import { IconName } from '../icons/IconProps';
import { PropsWithChildren } from 'react';
import React from 'react';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';

export interface DialogIconProps extends PropsWithChildren {
    name: IconName;
    color?: string;
}

export const DialogIcon = (props: DialogIconProps) => {
    const theme = useTheme();
    return (
        <View
            style={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 4,
                borderStyle: 'solid',
                borderColor: theme.sw.color.neutral[200],
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: theme.sw.spacing.s,
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    marginVertical: 'auto',
                    justifyContent: 'center',
                    width: 100,
                }}
            >
                <Icon
                    name={props.name}
                    size={42}
                    color={props.color ?? theme.sw.color.neutral[600]}
                />
            </View>
        </View>
    );
};
