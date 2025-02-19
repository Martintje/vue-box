import { expect, userEvent, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

import SomePage from './SomePage.vue'

const meta = {
  title: 'Example/SomePage',
  component: SomePage,
  render: () => ({
    components: { SomePage },
    template: '<SomePage />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SomePage>

export default meta
type Story = StoryObj<typeof meta>

// More on component testing: https://storybook.js.org/docs/writing-tests/component-testing
export const LoggedIn: Story = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', { name: /Log in/i })
    await expect(loginButton).toBeInTheDocument()
    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()

    const logoutButton = canvas.getByRole('button', { name: /Log out/i })
    await expect(logoutButton).toBeInTheDocument()
  },
}

export const LoggedOut: Story = {}
