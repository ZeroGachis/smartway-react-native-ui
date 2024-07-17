import React, { useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import * as Svg from 'react-native-svg';

export interface DividerProps {
    style?: ViewStyle;
    orientation?: 'vertical' | 'horizontal';
    dashed?: boolean;
}

export const Divider = ({ style, orientation = 'horizontal', dashed = false }: DividerProps) => {
    const theme = useTheme();
    const [lineLength, setLineLength] = useState(0);

    const styles = StyleSheet.create({
        container: {
            ...style,
        },
        line: {
            color: theme.sw.color.neutral[300],
        },
    });
    const strokeWidth = 1;
    const isRow = orientation == 'horizontal';
    const paddingTop = getPadding(style, 'paddingTop');
    const paddingBottom = getPadding(style, 'paddingBottom');
    const paddingLeft = getPadding(style, 'paddingLeft');
    const paddingRight = getPadding(style, 'paddingRight');
    const computedHeight = paddingTop + paddingBottom + strokeWidth;
    const computedWidth = paddingLeft + paddingRight + strokeWidth;
    return (
        <Svg.Svg
            style={
                isRow
                    ? { height: computedHeight, width: '100%' }
                    : { height: '100%', width: computedWidth }
            }
            onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                setLineLength(isRow ? width : height);
            }}
        >
            <Svg.Line
                stroke={styles.line.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`5, ${dashed ? '3' : '0'}`}
                x1={isRow ? 0 : paddingLeft + computedWidth / 2}
                y1={isRow ? paddingTop + computedHeight / 2 : 0}
                x2={isRow ? lineLength : paddingLeft + computedWidth / 2}
                y2={isRow ? paddingTop + computedHeight / 2 : lineLength}
            />
        </Svg.Svg>
    );
};

function getPadding(style: ViewStyle | undefined, border: string): number {
    if (style === undefined) {
        return 0;
    }
    const padding = style[border as keyof ViewStyle] ?? style?.padding;
    if (padding === undefined) {
        return 0;
    }

    if (typeof padding === 'string') {
        return parseInt(padding);
    }

    return padding as number;
}
