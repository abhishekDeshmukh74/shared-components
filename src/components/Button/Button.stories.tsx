import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonType } from './Button.component';

export default {
  title: 'General/Button',
  component: Button,
  argTypes: {
    type: {
      options: [ButtonType.primary, ButtonType.link],
      description: 'Type of the button',
      control: { type: 'inline-radio' },
    },
    label: {
      description: 'Label of the button',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    onClick: {
      description: 'on button click handler',
      action: 'clicked',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Primary UI component for user interaction',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: ButtonType.primary,
  label: ButtonType.primary,
  disabled: false,
};

export const Link = Template.bind({});
Link.args = {
  type: ButtonType.link,
  label: ButtonType.link,
};
