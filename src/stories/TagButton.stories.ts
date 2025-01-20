import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import TagButton from '../components/TagButton';

export interface TagButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  TagButton: string;
  onClick?: () => void;
}

const meta = {
  title: 'Button/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'TagButton의 내용' },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
    isChecked: {
      control: 'boolean',
      description: '선택 여부',
      defaultValue: false,
    },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    isChecked: false,
  },
};
