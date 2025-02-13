import type { Meta, StoryObj } from '@storybook/vue3'
import { HtmlLabel } from '@vue-box/hyper'

const meta = {
  title: 'Hyper/HtmlLabel',
  component: HtmlLabel,
  tags: ['autodocs'],
  argTypes: {
    forId: { control: 'text' },
    content: { control: 'text' },
    isContentHtml: { control: 'boolean' },
  },
  args: {
    forId: '1',
    content: 'Hello world!',
    isContentHtml: false,
  },
} satisfies Meta<typeof HtmlLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Content: Story = {}

export const ContentWithHtml: Story = {
  args: {
    content: '<a href="#" target="blank">Link</a>',
  },
}

export const ContentAsHtml: Story = {
  args: {
    content: '<a href="#" target="blank">Link</a>',
    isContentHtml: true,
  },
}
