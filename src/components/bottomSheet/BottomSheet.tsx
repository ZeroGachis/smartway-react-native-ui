import React, { useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    default as BaseBottomSheet,
} from '@gorhom/bottom-sheet';
import { useTheme } from '../../styles/themes';
import type { WithSpringConfig, WithTimingConfig } from 'react-native-reanimated';
import { Headline, HeadlineProps } from '../typography/Headline';

interface Props {
    isOpened: boolean;
    children: JSX.Element;
    onClose: () => void;
    snapPoints?: (string | number)[];
    backDropOpacity?: number;
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
        (props: BottomSheetBackdropProps) => (
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

    const handleSheetChanges = useCallback(
        (index: number) => {
            index === -1 ? close() : open();
        },
        [close],
    );

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
            style={[styles.contentContainer]}
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
