import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Body, Dialog, useTheme } from 'smartway-react-native-ui';

type DialogPropsAndCustomArgs = React.ComponentProps<typeof Dialog> & {
    haveSecondButton?: boolean;
};

export default {
    title: 'components/Dialog',
    component: Dialog,
    args: {
        variant: 'left',
        haveSecondButton: false,
        title: 'Headline',
    },
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['left', 'center'],
        },
        haveSecondButton: {
            control: { type: 'boolean' },
        },
    },
    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { alignItems: 'center', justifyContent: 'center', flex: 1 },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
    parameters: {
        notes: `
    Controle des Bouton :
    \`\`\`
    {{
      confirm: {
        label: 'Valider',
        onPress: () => {},
      },
      {
        label: 'Annuler',
        onPress: () => {},
      } // optional
    }}
    \`\`\`
    `,
    },
} as Meta<DialogPropsAndCustomArgs>;

type Story = StoryObj<DialogPropsAndCustomArgs>;

const InsideDialog = ({ variantBody }: { variantBody?: 'left' | 'center' }) => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        content: {
            color: theme.sw.colors.neutral[600],
            textAlign: variantBody,
            lineHeight: 22,
            marginBottom: 0,
        },
    });
    return (
        <Body style={styles.content}>
            A dialog is a type of modal window that appears in front of app content to provide
            critical information. This is a dialog content example.
        </Body>
    );
};

export const Default: Story = {
    render: (args) => {
        return (
            <Dialog
                {...args}
                visible={true}
                actions={{
                    confirm: {
                        label: 'Valider',
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onPress: () => {},
                    },
                    cancel: args?.haveSecondButton
                        ? {
                              label: 'Annuler',
                              // eslint-disable-next-line @typescript-eslint/no-empty-function
                              onPress: () => {},
                          }
                        : undefined,
                }}
            >
                <InsideDialog variantBody={args?.variant ?? 'left'} />
            </Dialog>
        );
    },
};
Default.parameters = { noSafeArea: false };
