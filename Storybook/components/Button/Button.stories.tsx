// stories/MyButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react-native';

import {Button} from 'smartway-react-native-ui';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {type: 'radio'},
      options: ['filled', 'outlined', 'text'],
    },
    size: {
      control: {type: 'radio'},
      options: ['s', 'm', null],
    },
    status: {
      control: {type: 'radio'},
      options: ['primary', 'default', null],
    },
    onPress: {action: 'clicked'},
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};
