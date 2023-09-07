/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-nocheck
import React from 'react';
import { View } from 'react-native';
import { BarDefaults } from '../../utils/constants';

const Cap = (props) => {
    const {
        capThicknessFromItem,
        capThicknessFromProps,
        capColorFromItem,
        capColorFromProps,
        capRadiusFromItem,
        capRadiusFromProps,
    } = props;
    return (
        <View
            style={{
                position: 'absolute',
                width: '100%',
                height: capThicknessFromItem ?? capThicknessFromProps ?? BarDefaults.capThickness,
                backgroundColor: capColorFromItem ?? capColorFromProps ?? BarDefaults.capColor,
                borderTopLeftRadius:
                    capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius,
                borderTopRightRadius:
                    capRadiusFromItem ?? capRadiusFromProps ?? BarDefaults.capRadius,
            }}
        />
    );
};

export default Cap;
