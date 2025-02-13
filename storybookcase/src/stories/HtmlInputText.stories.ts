import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'
import { HtmlInputText } from '@vue-box/hyper'

const meta = {
  title: 'Hyper/HtmlInputText',
  component: HtmlInputText,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    'onUpdate:modelValue': fn(),
  },
  args: {
    id: '1',
    modelValue: 'Hello world!',
    'onUpdate:modelValue': fn(),
  },
} satisfies Meta<typeof HtmlInputText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
