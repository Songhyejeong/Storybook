import type { Meta, StoryObj } from '@storybook/react';

import { ErrorMessage } from '../components/ErrorMessage.tsx';

export interface ErrorMessageProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  ErrorMessage: string;
  onClick?: () => void;
}

const meta = {
  title: 'Text/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'ErrorMessage의 내용' },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '에러 메세지는 여기로',
  },
};
