import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'change' } },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium numquam adipisci neque laborum animi quam dolore quae minus officia inventore cum cumque voluptas maiores veritatis eos expedita aliquid recusandae porro, dolor sed molestias. Dignissimos perferendis facilis fugiat? Veniam iusto id rerum quasi ipsum fugit totam consequatur earum labore obcaecati. Quae velit consectetur reprehenderit distinctio itaque culpa, incidunt soluta commodi non officiis, molestias dolor repellat eaque aliquid iste quod cupiditate! Quae cum aperiam error temporibus nostrum dicta fuga quos eius officia nulla voluptas, expedita, repellat accusantium exercitationem ipsam iusto mollitia qui reprehenderit tempore dolorem atque adipisci ullam. Aliquid ipsa repudiandae sed!',
  },
}
