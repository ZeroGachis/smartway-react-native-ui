import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ActionCard, EANInput, Icon, TextField } from 'smartway-react-native-ui';

type ActionCardProps = React.ComponentProps<typeof ActionCard>;

export default {
    title: 'components/ActionCard',
    component: ActionCard,
    args: {
        title: 'Headline',
    },
    argTypes: {
        titleColor: { control: { type: 'color' } },
    },
    parameters: {
        notes: `
    ActionCard :
    \`\`\`
    <ActionCard
    title="Texte action possible"
    titleColor={theme.sw.colors.neutral[500]}
    bottomChildren={
        <EANInput
            value={scanValue}
            onChangeText={(text) => {
                setValue(text);
            }}
            placeholder="Scanner ou saisir un gencode"
        />
    }
>
    <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon size={24} name="close" />
            <TextField
                textType="information"
                value="0"
                style={{ marginBottom: 0, marginLeft: 12 }}
                inputStyles={{
                    fontSize: 28,
                    lineHeight: 33,
                    textAlign: 'center',
                }}
            />
        </View>
    </View>
</ActionCard>
    \`\`\`
    `,
    },
} as Meta<ActionCardProps>;

type Story = StoryObj<ActionCardProps>;

const InsideActionCard = () => {
    const styles = StyleSheet.create({
        content: {
            alignItems: 'center',
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        textField: {
            marginBottom: 0,
            marginLeft: 12,
        },
    });
    return (
        <View style={styles.content}>
            <View style={styles.row}>
                <Icon size={24} name="close" />
                <TextField
                    textType="information"
                    value="0"
                    style={styles.textField}
                    inputStyles={{
                        fontSize: 28,
                        lineHeight: 33,
                        textAlign: 'center',
                    }}
                />
            </View>
        </View>
    );
};

const BottomActionCard = () => (
    <EANInput placeholder="Scanner ou saisir un gencode" value={'0124578963255'} />
);

export const Default: Story = {
    render: (args) => {
        return (
            <ActionCard
                title={args.title}
                titleColor={args.titleColor}
                bottomChildren={<BottomActionCard />}
            >
                <InsideActionCard />
            </ActionCard>
        );
    },
};
Default.parameters = { noSafeArea: false };
