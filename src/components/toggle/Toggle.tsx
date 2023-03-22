import { StyleSheet, TextStyle, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
    interpolateColor,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
    useDerivedValue,
} from 'react-native-reanimated';
import { useTheme } from '../..//styles/themes';

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
    const knobTranslate = useSharedValue(0);
    const textTranslate = useSharedValue(0);

    const progress = useDerivedValue(() => {
        return withTiming(isToggled ? 0 : 1);
    });

    useEffect(() => {
        if (isToggled) {
            knobTranslate.value = 40;
            textTranslate.value = 10;
        } else {
            knobTranslate.value = 6;
            textTranslate.value = 50;
        }
    }, [isToggled, knobTranslate, textTranslate]);

    const moveKnob = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(knobTranslate.value, {
                        mass: 1,
                        damping: 15,
                        stiffness: 120,
                    }),
                },
            ],
        };
    });

    const moveText = useAnimatedStyle(() => {
        return {
            left: withSpring(textTranslate.value, {
                mass: 1,
                damping: 15,
                stiffness: 120,
            }),
        };
    });

    const backgroundColorStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [theme.sw.colors.success[500], theme.sw.colors.neutral[400]],
        );
        return {
            backgroundColor,
        };
    });

    const styles = StyleSheet.create({
        container: {
            width: 70,
            height: 32,
            borderRadius: 50,
            justifyContent: 'center',
            ...style,
        },
        knob: {
            width: 22.5,
            height: 22.5,
            borderRadius: 50,
            backgroundColor: theme.sw.colors.neutral[50],
            zIndex: 1,
        },
        text: {
            position: 'absolute',
            color: isToggled ? theme.sw.colors.neutral[50] : theme.sw.colors.neutral[600],
            left: 50,
            ...textStyle,
        },
    });

    return (
        <TouchableWithoutFeedback onPress={onValueChange}>
            <Animated.View style={[styles.container, backgroundColorStyle]}>
                <Animated.View style={[styles.knob, moveKnob]} />
                <Animated.Text style={[styles.text, moveText]}>{text}</Animated.Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
