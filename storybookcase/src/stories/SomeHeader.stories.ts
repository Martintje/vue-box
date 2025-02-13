import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

import SomeHeader from './SomeHeader.vue'

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/SomeHeader',
  component: SomeHeader,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (arguments_: any) => ({
    components: { SomeHeader },
    setup() {
      return { args: arguments_ }
    },
    template: '<SomeHeader :user="args.user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SomeHeader>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story = {
  args: {
    // eslint-disable-next-line unicorn/no-null
    user: null,
  },
}
