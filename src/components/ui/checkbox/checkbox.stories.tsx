import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: { onChange: { action: 'change' } },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
  },
}

export const WithLabel: Story = {
  render: args => {
    const {} = args
    const [checked, setChecked] = useState(false)

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox id="c1" checked={checked} onChange={() => setChecked(p => !p)} />
        <label style={{ marginLeft: '10px', cursor: 'pointer', userSelect: 'none' }} htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
    )
  },
  args: {},
}
