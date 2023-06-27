import { ComponentPropsWithoutRef } from 'react'

import s from './checkbox.module.scss'

type Props = {
  checked?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = (props: Props) => {
  const { className, ...restProps } = props

  return <input type="checkbox" className={`${s.checkbox} ${className}`} {...restProps} />
}
