import React, { useState } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../styles/themes';
import * as Svg from 'react-native-svg';

export interface Props {
    style?: ViewStyle;
    orientation?: 'vertical' | 'horizontal';
    dashed?: boolean;
}

export const Divider = ({ style, orientation = 'horizontal', dashed = false }: Props) => {
    const theme = useTheme();
    const [lineLength, setLineLength] = useState(0);

    const styles = StyleSheet.create({
        container: {
            ...style,
        },
        line: {
            // TODO: use new tokens
            color: theme.sw.color.neutral[500] + '3D',
        },
    });
    const isRow = orientation == 'horizontal';
    const paddingTop = getPadding(style, 'paddingTop');
    const paddingBottom = getPadding(style, 'paddingBottom');
    const paddingLeft = getPadding(style, 'paddingLeft');
    const paddingRight = getPadding(style, 'paddingRight');
    const heigh = isRow ? paddingTop + paddingBottom + 1 : '100%';
    const width = !isRow ? paddingLeft + paddingRight + 1 : '100%';
    return (
        <Svg.Svg
            style={{ height: heigh, width: width }}
            onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                setLineLength(isRow ? width : height);
            }}
        >
            <Svg.Line
                stroke={styles.line.color}
                strokeWidth={1}
                strokeDasharray={`5, ${dashed ? '3' : '0'}`}
                x1={isRow ? 0 : paddingLeft}
                y1={isRow ? paddingTop : 0}
                x2={isRow ? lineLength : paddingLeft}
                y2={isRow ? paddingTop : lineLength}
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
