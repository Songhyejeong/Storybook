import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import PrimaryButton from '../components/PrimaryButton';

export interface PrimaryButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  PrimaryButton: string;
  onClick?: () => void;
}

const meta = {
  title: 'Button/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => (
      <div style={{ width: '360px', height: '100%' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: { control: 'text', description: 'PrimaryButton의 내용' },
    theme: {
      control: 'select',
      options: ['dark', 'light', 'social', 'text'],
      description: '버튼 테마',
      defaultValue: 'dark',
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false,
    },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: 'Button',
    theme: 'dark',
    isDisabled: false,
  },
};

export const Light: Story = {
  args: {
    children: 'Button',
    theme: 'light',
    isDisabled: false,
  },
};

export const Social: Story = {
  args: {
    children: 'Button',
    theme: 'social',
    isDisabled: false,
  },
};

export const Text: Story = {
  args: {
    children: 'Button',
    theme: 'text',
    isDisabled: false,
  },
};
