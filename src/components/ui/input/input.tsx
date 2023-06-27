import { ComponentPropsWithoutRef } from 'react'

import s from './input.module.scss'

type Props = {} & ComponentPropsWithoutRef<'input'>

export const Input = (props: Props) => {
  const { className, ...restProps } = props

  return <input type="text" className={`${s.input} ${className}`} {...restProps} />
}
