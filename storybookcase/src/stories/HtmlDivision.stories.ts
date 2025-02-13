import type { Meta, StoryObj } from '@storybook/vue3'
import { HtmlDivision } from '@vue-box/hyper'

const meta = {
  title: 'Hyper/HtmlDivision',
  component: HtmlDivision,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    isContentHtml: { control: 'boolean' },
  },
  args: {
    content: 'Hello world!',
    isContentHtml: false,
  },
} satisfies Meta<typeof HtmlDivision>

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
