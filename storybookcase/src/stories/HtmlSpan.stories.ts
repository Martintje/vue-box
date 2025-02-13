import type { Meta, StoryObj } from '@storybook/vue3'
import { HtmlSpan } from '@vue-box/hyper'

const meta = {
  title: 'Hyper/HtmlSpan',
  component: HtmlSpan,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    isContentHtml: { control: 'boolean' },
  },
  args: {
    content: 'Hello world!',
    isContentHtml: false,
  },
} satisfies Meta<typeof HtmlSpan>

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
