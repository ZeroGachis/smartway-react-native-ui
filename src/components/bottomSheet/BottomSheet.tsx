import React, { useCallback, useEffect, useRef } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { BottomSheetBackdrop, default as BaseBottomSheet } from '@gorhom/bottom-sheet';
import { useTheme } from '../../styles/themes';
import type { AnimateStyle, WithSpringConfig, WithTimingConfig } from 'react-native-reanimated';

type ContentStyle = StyleProp<
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
    contentStyle?: ContentStyle;
    handleStyle?: ViewStyle;
    handleIndicatorStyle?: ViewStyle;
    animationDuration?: number;
    animationConfigs?: WithSpringConfig | WithTimingConfig;
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
            contentStyle,
        },

        indicatorStyle: {
            backgroundColor: theme.sw.colors.neutral[400],
            ...handleIndicatorStyle,
        },
    });

    return (
        <BaseBottomSheet
            index={isOpened ? 0 : -1}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose
            style={[styles.contentContainer, contentStyle]}
            handleStyle={[{ paddingTop: theme.sw.spacing.xs }, handleStyle]}
            handleIndicatorStyle={styles.indicatorStyle}
            backdropComponent={renderBackdrop}
            animationConfigs={animationConfigs}
        >
            {children}
        </BaseBottomSheet>
    );
};
