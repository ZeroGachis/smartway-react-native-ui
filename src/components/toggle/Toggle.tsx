import React, { useState } from 'react';
import { Pressable, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Animated, Easing, View } from 'react-native';
import { useTheme } from '../../styles/themes';
import { Body } from '../typography/Body';

interface Props {
    isToggled: boolean;
    onValueChange: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    text?: string;
    textStyle?: TextStyle;
}

export const Toggle = ({ isToggled, onValueChange, style, text, textStyle }: Props) => {
    const theme = useTheme();

    const [fadeAnim] = useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(fadeAnim, { toValue: 1, useNativeDriver: true });
    }, []);

    const getColor = () => {
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

    const { color } = getColor();

    const animatedValue = new Animated.Value(0);
    const moveToggle = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [6, 40],
    });
    const moveText = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 10],
    });
    const animateColors = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [theme.sw.colors.neutral[400], theme.sw.colors.success[500]],
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
        },
        toggleWheelStyle: {
            width: 22.5,
            height: 22.5,
            backgroundColor: 'white',
            borderRadius: 12.5,
            zIndex: 1,
        },
        percentContainer: {
            color: theme.sw.colors.neutral[600],
            position: 'absolute',
            right: 0,
        },
        text: {
            color,
            ...textStyle,
        },
    });

    return (
        <View style={styles.container}>
            <Pressable onPress={onValueChange}>
                <Animated.View
                    style={[styles.toggleContainer, style, { backgroundColor: animateColors }]}
                >
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
                        {text && <Body style={styles.text}>{text}</Body>}
                    </Animated.View>
                </Animated.View>
            </Pressable>
        </View>
    );
};
