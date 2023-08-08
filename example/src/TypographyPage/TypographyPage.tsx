import React from 'react';
import { Divider, Headline, Screen } from 'smartway-react-native-ui';

export const TypographyPage = () => {
    return (
        <Screen>
            <Headline size="h1">This is H1 bold Headline</Headline>
            <Divider style={{ padding: 20 }} />
            <Headline size="h2">This is H2 bold Headline</Headline>
            <Divider style={{ padding: 20 }} />
            <Headline size="h3">This is H3 bold Headline</Headline>
            <Divider style={{ padding: 20 }} />
            <Headline size="h4">This is H4 bold Headline</Headline>
        </Screen>
    );
};
