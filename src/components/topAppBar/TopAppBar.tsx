import React, { ReactNode } from 'react';
import { ButtonProps, StyleSheet, View } from 'react-native';
import { Headline } from '../typography/Headline';
import { IconButton } from '../buttons/IconButton';

export interface IconButtonProps extends Pick<ButtonProps, 'onPress'> {}

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
    const styles = StyleSheet.create({
        root: {
            height: 112,
        },
        container: {
            paddingLeft: 24,
            paddingRight: 24,
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
        },
        wrapper: {
            alignSelf: 'stretch',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    });
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={{ display: isExpanded ? 'flex' : 'none', ...styles.wrapper }}>
                    <IconButton
                        {...backButton}
                        status="primary"
                        icon="arrow-back"
                        variant="filled"
                        size="m"
                    ></IconButton>
                    <IconButton
                        {...moreButton}
                        status="primary"
                        icon="more"
                        variant="filled"
                        size="m"
                    />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Headline size="h1">{children}</Headline>
                    <IconButton
                        {...settingsButton}
                        style={{ display: !isExpanded && showSettings ? 'flex' : 'none' }}
                        status="primary"
                        icon="settings"
                        variant="filled"
                        size="m"
                    ></IconButton>
                </View>
            </View>
        </View>
    );
};
