import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { List } from 'react-native-paper';
import { useTheme } from '../../styles/themes';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/IconProps';

export interface DropDownOption {
    value: string;
}

interface Props {
    disabled?: boolean;
    error?: boolean;
    placeholder: string;
    options: DropDownOption[];
    setSelected: (item: DropDownOption) => void;
    selected?: DropDownOption;
    style?: ViewStyle;
    optionStyle?: ViewStyle;
    containerStyle?: ViewStyle;
    accordionStyle?: ViewStyle;
    icon?: IconName;
    testID?: string;
    optionTestID?: string;
}
export const DropDown = ({
    disabled,
    error,
    placeholder,
    options,
    setSelected,
    selected,
    style,
    optionStyle,
    containerStyle,
    accordionStyle,
    icon = 'arrow-up',
    testID,
    optionTestID,
}: Props) => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => {
        if (disabled) {
            return;
        }
        setExpanded(!expanded);
    };

    const handleSelect = (option: DropDownOption) => {
        setSelected(option);
        setExpanded(false);
    };

    const getColors = () => {
        if (expanded) {
            return {
                color: theme.sw.colors.primary[400],
                borderColor: theme.sw.colors.neutral[400],
            };
        }
        if (error) {
            return {
                color: theme.sw.colors.error[400],
                borderColor: theme.sw.colors.error[400],
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
            ...containerStyle,
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
            ...accordionStyle,
        },
        accordionTitle: {
            color: color,
            fontWeight: 'bold',
            fontSize: 16,
            alignSelf: 'center',
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
            <List.Section style={styles.section}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <List.Accordion
                        expanded={expanded}
                        testID={testID}
                        onPress={handlePress}
                        style={styles.accordion}
                        titleStyle={styles.accordionTitle}
                        title={selected ? selected.value : placeholder}
                        right={() => <Icon name={icon} />}
                    >
                        {options.map((option: DropDownOption, index: number) => (
                            <List.Item
                                key={index}
                                testID={optionTestID}
                                titleStyle={styles.optionTitle}
                                style={styles.option}
                                title={option.value}
                                onPress={() => handleSelect(option)}
                            />
                        ))}
                    </List.Accordion>
                </ScrollView>
            </List.Section>
        </View>
    );
};
