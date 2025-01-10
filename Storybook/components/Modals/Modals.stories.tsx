import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Body, Modal } from 'smartway-react-native-ui';
import { IconsName } from '../config/IconList';

type ModalPropsAndCustomArgs = React.ComponentProps<typeof Modal> & {
    haveSecondButton?: boolean;
};

export default {
    title: 'components/Dialog',
    component: Modal,
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
        haveMoreButtons: {
            control: { type: 'radio' },
            options: ['0', '1', '2'],
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
      cta: {
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
} as Meta<ModalPropsAndCustomArgs>;

type Story = StoryObj<ModalPropsAndCustomArgs>;

const InsideDialog = ({ variantBody }: { variantBody?: 'left' | 'center' }) => {
    const styles = StyleSheet.create({
        content: {
            textAlign: variantBody,
        },
    });
    return (
        <Body style={styles.content} typography={'n2'}>
            A dialog is a type of modal window that appears in front of app content to provide
            critical information. This is a dialog content example.
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
            <Modal
                icon={iconprops ?? undefined}
                {...args}
                visible={true}
                actions={{
                    cta: {
                        label: 'Confirm',
                        disabled: args.disabled,
                        loading: args.loading,
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onPress: () => {},
                    },
                    cancel:
                        args?.haveMoreButtons >= '1'
                            ? {
                                  label: 'Cancel',
                                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                                  onPress: () => {},
                              }
                            : undefined,
                    secondary:
                        args?.haveMoreButtons >= '2'
                            ? {
                                  label: 'Verify',
                                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                                  onPress: () => {},
                              }
                            : undefined,
                }}
            >
                <InsideDialog variantBody={args?.variant ?? 'left'} />
            </Modal>
        );
    },
};
Default.parameters = { noSafeArea: false };
