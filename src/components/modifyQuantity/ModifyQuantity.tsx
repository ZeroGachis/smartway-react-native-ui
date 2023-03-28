import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';
import { TextInput } from '../inputs/TextInput';
import { Body } from '../typography/Body';

interface Props {
    text: string;
    onAdd: () => void;
    disabled?: boolean;
    onMinus: () => void;
    style?: ViewStyle;
    inputValue: string;
    icon?: IconName;
}

export const ModifyQuantity = ({
    text,
    onAdd,
    onMinus,
    style,
    inputValue,
    disabled,
    icon = 'etiquette',
}: Props) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: theme.sw.spacing.l,
            backgroundColor: theme.sw.colors.neutral[50],
            borderRadius: 24,
            justifyContent: 'space-between',
            elevation: 1,
            ...style,
        },
        text: {
            marginLeft: theme.sw.spacing.s,
            color: theme.sw.colors.neutral[800],
        },
        iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        inputContainer: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        input: {
            marginBottom: 0,
            marginHorizontal: theme.sw.spacing.l,
        },
        inputText: {
            fontSize: 28,
            textAlign: 'center',
            justifyContent: 'center',
        },
    });
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={{ transform: [{ rotate: '225deg' }] }}>
                    <Icon size={24} name={icon} color={theme.sw.colors.neutral[600]} />
                </View>
                <Body style={styles.text}>{text}</Body>
            </View>
            <View style={styles.inputContainer}>
                <Pressable disabled={disabled} hitSlop={8} onPress={onMinus}>
                    <Icon
                        size={28}
                        color={disabled ? '#919EAB3D' : theme.sw.colors.neutral[800]}
                        name="minus-fill"
                    />
                </Pressable>
                <TextInput
                    style={styles.input}
                    inputStyles={styles.inputText}
                    value={inputValue}
                    textType={'information'}
                />

                <Pressable onPress={onAdd} hitSlop={8}>
                    <Icon size={28} color={theme.sw.colors.neutral[800]} name="add-fill" />
                </Pressable>
            </View>
        </View>
    );
};
