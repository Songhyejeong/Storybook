import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';
import IconButton from '../components/IconButton.tsx';

export interface IconButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  IconButton: string;
  onClick?: () => void;
}

const meta = {
  title: 'Text/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    alt: {
      control: 'text',
      description: '이미지의 alt 속성',
      defaultValue: '',
    },
    iconPath: {
      control: 'text',
      description: '이미지의 경로',
      defaultValue: '',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'icon',
    iconPath: '/ic-asset-delete-dark.svg',
  },
};
