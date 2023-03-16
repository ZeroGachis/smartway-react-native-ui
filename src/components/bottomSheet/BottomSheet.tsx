import React, { useCallback, useEffect, useRef } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BottomSheetBackdrop, default as BaseBottomSheet } from '@gorhom/bottom-sheet';
import { useTheme } from '../../styles/themes';
import type { AnimateStyle, WithSpringConfig, WithTimingConfig } from 'react-native-reanimated';
import { Headline, HeadlineProps } from '../typography/Headline';

type ContentContainerStyle = StyleProp<
    AnimateStyle<
        Omit<
            ViewStyle,
            | 'flexDirection'
            | 'position'
            | 'top'
            | 'left'
            | 'bottom'
            | 'right'
            | 'opacity'
            | 'transform'
        >
    >
>;
interface Props {
    isOpened: boolean;
    children: JSX.Element;
    onClose: () => void;
    snapPoints?: (string | number)[];
    backDropOpacity?: number;
    contentContainerStyle?: ContentContainerStyle;
    contentStyle?: ViewStyle;
    handleStyle?: ViewStyle;
    handleIndicatorStyle?: ViewStyle;
    animationDuration?: number;
    animationConfigs?: WithSpringConfig | WithTimingConfig;
    swipeable?: boolean;
    title?: string;
    titleProps?: HeadlineProps;
}
export const BottomSheet = ({
    children,
    isOpened,
    onClose,
    snapPoints = ['40%'],
    backDropOpacity = 0.2,
    contentContainerStyle,
    contentStyle,
    handleStyle,
    handleIndicatorStyle,
    animationConfigs = { duration: 200 },
    swipeable = false,
    title,
    titleProps,
}: Props) => {
    const theme = useTheme();
    const bottomSheetRef = useRef<BaseBottomSheet>(null);

    useEffect(() => {
        !isOpened && close();
    }, [isOpened]);

    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                opacity={backDropOpacity}
            />
        ),
        [backDropOpacity],
    );

    const close = () => {
        bottomSheetRef.current?.close();
        onClose();
    };
    const open = () => {
        bottomSheetRef.current?.expand();
    };

    const handleSheetChanges = useCallback((index: number) => {
        index === -1 ? close() : open();
    }, []);

    const styles = StyleSheet.create({
        contentContainer: {
            overflow: 'hidden',
            borderRadius: 24,
        },

        indicatorStyle: {
            backgroundColor: theme.sw.colors.neutral[400],
            ...handleIndicatorStyle,
        },
        content: {
            padding: theme.sw.spacing.m,
            ...contentStyle,
        },
    });

    return (
        <BaseBottomSheet
            index={isOpened ? 0 : -1}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={swipeable}
            style={[styles.contentContainer, contentContainerStyle]}
            handleStyle={[{ paddingTop: theme.sw.spacing.xs }, handleStyle]}
            handleIndicatorStyle={styles.indicatorStyle}
            backdropComponent={renderBackdrop}
            animationConfigs={animationConfigs}
        >
            <View style={styles.content}>
                <Headline {...titleProps}>{title}</Headline>
                {children}
            </View>
        </BaseBottomSheet>
    );
};
