import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';
import CategoryButton from '../components/CategoryButton.tsx';

export interface CategoryButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  CategoryButton: string;
  onClick?: () => void;
}

const meta = {
  title: 'Button/CategoryButton',
  component: CategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    iconAlt: {
      control: 'text',
      description: '카테고리의 alt 속성',
      defaultValue: '',
    },
    iconPath: {
      control: 'text',
      description: '카테고리의 경로',
      defaultValue: '',
    },
    text: {
      control: 'text',
      description: '카테고리의 텍스트',
      defaultValue: '',
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn('Button clicked'),
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: 'icon',
    text: '카테고리',
    iconPath: '/ic-asset-category.svg',
  },
};
