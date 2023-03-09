import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { List } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
interface Props {
    disabled?: boolean;
    error?: boolean;
    placeholder: string;
    label?: string;
    options: any[];
    setSelected: (item: any) => void;
    selected: any;
    style?: ViewStyle;
    optionStyle?: ViewStyle;
}
export const DropDown = ({
    disabled,
    error,
    placeholder,
    label,
    options,
    setSelected,
    selected,
    style,
    optionStyle,
}: Props) => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => {
        if (disabled) {
            return;
        }
        setExpanded(!expanded);
    };

    const handleChoose = (item: any) => {
        setSelected(item);
        setExpanded(false);
    };

    const getColors = () => {
        if (expanded) {
            return {
                color: theme.sw.colors.primary[400],
                borderColor: theme.sw.colors.neutral[400],
            };
        }
        if (disabled) {
            return {
                color: theme.sw.colors.neutral[800],
                borderColor: 'transparent',
            };
        }
        if (error) {
            return {
                color: theme.sw.colors.error.main,
                borderColor: theme.sw.colors.error.main,
            };
        }
        return {
            color: theme.sw.colors.neutral[500],
            borderColor: theme.sw.colors.neutral[400],
        };
    };
    const { color, borderColor } = getColors();

    const styles = StyleSheet.create({
        container: {
            marginBottom: theme.sw.spacing.l,
        },
        label: {
            color: theme.sw.colors.neutral[800],
            fontSize: 16,
            lineHeight: 19,
        },
        section: {
            borderWidth: 1,
            borderRadius: 8,
            overflow: 'hidden',
            borderColor: borderColor,
            marginTop: theme.sw.spacing.xs,
            ...style,
        },
        accordion: {
            backgroundColor: theme.sw.colors.neutral[50],
            paddingVertical: theme.sw.spacing.s,
        },
        accordionTitle: {
            color: color,
            fontWeight: 'bold',
            fontSize: 16,
        },
        option: {
            ...optionStyle,
        },
        optionTitle: {
            fontWeight: 'bold',
            color: theme.sw.colors.neutral[800],
            fontSize: 16,
        },
    });

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <List.Section style={styles.section}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <List.Accordion
                        expanded={expanded}
                        onPress={handlePress}
                        style={styles.accordion}
                        titleStyle={styles.accordionTitle}
                        title={selected ? selected : placeholder}
                        right={() => <Icon name="arrow-up" />}
                    >
                        {options.map((item, index: number) => (
                            <List.Item
                                key={index}
                                titleStyle={styles.optionTitle}
                                style={styles.option}
                                title={item}
                                onPress={() => handleChoose(item)}
                            />
                        ))}
                    </List.Accordion>
                </ScrollView>
            </List.Section>
        </View>
    );
};
