import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HtmlInputNumber } from '@vue-box/hyper'

const meta = {
  title: 'Hyper/HtmlInputNumber',
  component: HtmlInputNumber,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'number' },
    'onUpdate:modelValue': fn(),
  },
  args: {
    id: '1',
    modelValue: 3,
    'onUpdate:modelValue': fn(),
  },
} satisfies Meta<typeof HtmlInputNumber>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
