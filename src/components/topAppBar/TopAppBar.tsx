import React, { ReactNode } from 'react';
import { ButtonProps, StyleSheet, View } from 'react-native';
import { Headline } from '../typography/Headline';
import { IconButton } from '../buttons/IconButton';
import { useTheme } from '../../styles/themes';

export type IconButtonProps = Pick<ButtonProps, 'onPress'>;

interface Props {
    isExpanded?: boolean;
    showSettings?: boolean;
    settingsButton?: IconButtonProps;
    backButton?: IconButtonProps;
    moreButton?: IconButtonProps;
    children?: ReactNode;
}

export const TopAppBar = ({
    isExpanded = false,
    showSettings = false,
    children,
    settingsButton,
    backButton,
    moreButton,
}: Props) => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        root: {
            height: 112,
        },
        container: {
            paddingLeft: theme.sw.spacing.l,
            paddingRight: theme.sw.spacing.l,
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    });
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <IconButton
                    style={{ display: isExpanded ? 'flex' : 'none' }}
                    {...backButton}
                    status="primary"
                    icon="arrow-back"
                    variant="filled"
                    size="m"
                ></IconButton>
                <IconButton
                    style={{ display: isExpanded ? 'flex' : 'none' }}
                    {...moreButton}
                    status="primary"
                    icon="more"
                    variant="filled"
                    size="m"
                />
            </View>
            <View style={styles.container}>
                <Headline size="h1">{children}</Headline>
                <IconButton
                    {...settingsButton}
                    style={{
                        display: !isExpanded && showSettings ? 'flex' : 'none',
                    }}
                    status="primary"
                    icon="settings"
                    variant="filled"
                    size="m"
                ></IconButton>
            </View>
        </View>
    );
};
