import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// fake component must be replace by one from the library
const Component = (props: React.PropsWithChildren) => {
    const { children } = props;
    return <>{children}</>;
}; // must be removed

type ComponentProps = React.ComponentProps<typeof Component>;

export default {
    title: 'components/Component', // change it with your component name eg('components/AwesomeButton',)
    component: Component,
    //default value
    args: {},
    // add some control in argTypes
    // some example
    // https://github.com/storybookjs/react-native/blob/next/examples/expo-example/components/ControlExamples/ControlExample/ControlExample.stories.tsx
    argTypes: {},
    // use it to wrap your storie in composant
    decorators: [
        (Story) => {
            const styles = StyleSheet.create({
                container: { paddingTop: 16 },
            });
            return (
                <View style={styles.container}>
                    <Story />
                </View>
            );
        },
    ],
} as Meta<ComponentProps>;

type Story = StoryObj<ComponentProps>;

// first story use it with args to change load only props value
// you can also use render as
// render : (args) => <AwesomeButton {...args}>
export const Default: Story = {
    args: {},
};
Default.parameters = { noSafeArea: false };
