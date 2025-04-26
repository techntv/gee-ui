import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Accordion } from './'; // Assuming Accordion is exported from index.ts or Accordion.tsx in the same directory

// TODO: Update args based on the actual props of your Accordion component
const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    // Consider adjusting layout if 'centered' isn't suitable for Accordion
    // layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    // Use the 'sections' prop based on linter errors
    sections: [
      { key: '1', title: 'Section 1', content: 'Content for section 1' },
      { key: '2', title: 'Section 2', content: 'Content for section 2' },
    ],
    // Add other relevant props and default values if needed
    // e.g., onToggle: fn(),
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic default story
export const Default: Story = {
  args: {
    // Args now reflect the 'sections' structure
    // You can override the default sections here if needed for this specific story
    // sections: [
    //   { key: 'story1', title: 'Story Specific Section', content: 'Unique content for this story' }
    // ]
  },
};

// Add more stories below for different states or variations
// e.g., export const InitiallyOpen: Story = { ... };
