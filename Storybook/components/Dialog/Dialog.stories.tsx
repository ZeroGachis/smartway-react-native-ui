import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Body, Dialog, useTheme } from 'smartway-react-native-ui';
import { IconsName } from '../config/IconList';

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
        name: undefined,
        color: 'red',
    },
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['left', 'center'],
        },
        haveSecondButton: {
            control: { type: 'boolean' },
        },
        name: { control: { type: 'select' }, options: IconsName },
        disabled: { control: { type: 'boolean' } },
        loading: { control: { type: 'boolean' } },
        color: { control: { type: 'color' } },
    },
    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                },
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
            color: theme.sw.color.neutral[600],
            textAlign: variantBody,
            lineHeight: 22,
            marginBottom: 0,
        },
    });
    return (
        <Body style={styles.content} size='B2'>
            A dialog is a type of modal window that appears in front of app
            content to provide critical information. This is a dialog content
            example.
        </Body>
    );
};

export const Default: Story = {
    render: (args) => {
        const iconprops = args.name !== undefined && {
            name: args.name,
            color: args.color ?? undefined,
        };
        return (
            <Dialog
                icon={iconprops ?? undefined}
                {...args}
                visible={true}
                actions={{
                    confirm: {
                        label: 'Valider',
                        disabled: args.disabled,
                        loading: args.loading,
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
