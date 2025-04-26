import type { Meta, StoryObj } from '@storybook/react'
import { FlightBooker } from './'

const meta = {
  title: 'Components/FlightBooker',
  component: FlightBooker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    // FlightBooker component doesn't take props in this implementation
  },
} satisfies Meta<typeof FlightBooker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
