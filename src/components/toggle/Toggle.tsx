import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Animated, Easing, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../styles/themes';

interface Props {
    isToggled: boolean;
    onValueChange: () => void;
    disabled?: boolean;
    withIcon?: boolean;
    style?: ViewStyle;
}

export const Toggle = ({ isToggled, onValueChange, style, withIcon = false }: Props) => {
    const theme = useTheme();

    const getColors = () => {
        if (isToggled) {
            return {
                backgroundColor: theme.sw.colors.success[500],
                color: theme.sw.colors.neutral[50],
            };
        }
        return {
            backgroundColor: theme.sw.colors.neutral[400],
            color: theme.sw.colors.neutral[600],
        };
    };

    const { backgroundColor, color } = getColors();

    const animatedValue = new Animated.Value(0);
    const moveToggle = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [6, 40],
    });
    const moveText = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 10],
    });
    animatedValue.setValue(isToggled ? 0 : 1);

    Animated.timing(animatedValue, {
        toValue: isToggled ? 1 : 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
    }).start();

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: theme.sw.spacing.m,
        },
        toggleContainer: {
            width: 70,
            paddingVertical: theme.sw.spacing.xs,
            borderRadius: 50,
            justifyContent: 'center',
            backgroundColor,
        },
        toggleWheelStyle: {
            width: 22.5,
            height: 22.5,
            backgroundColor: 'white',
            borderRadius: 12.5,
        },
        percentContainer: {
            color: theme.sw.colors.neutral[600],
            position: 'absolute',
            right: 0,
        },
        percent: {
            color,
            fontSize: 16,
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onValueChange}>
                <View style={[styles.toggleContainer, style]}>
                    <Animated.View
                        style={[
                            styles.toggleWheelStyle,
                            {
                                marginLeft: moveToggle,
                            },
                        ]}
                    />
                    <Animated.View
                        style={[
                            styles.percentContainer,
                            {
                                left: moveText,
                            },
                        ]}
                    >
                        {withIcon && <Text style={styles.percent}>%</Text>}
                    </Animated.View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
