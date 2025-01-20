import type { Meta, StoryObj } from '@storybook/react';
import { action as fn } from '@storybook/addon-actions';

import TagList from '../components/TagList';

export interface TagListProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  TagList: string;
  onClick?: () => void;
}

const meta = {
  title: 'Button/TagList',
  component: TagList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tagList: {
      control: 'text',
      description: 'TagList',
      defaultValue: ['tag1', 'tag2', 'tag3'],
    },
  },
  args: {
    onTagClick: fn('Button clicked'),
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ['tag1', 'tag2', 'tag3'],
  },
};
