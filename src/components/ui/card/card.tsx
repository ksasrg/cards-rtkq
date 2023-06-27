import { ComponentPropsWithoutRef } from 'react'

import s from './card.module.scss'

type Props = {} & ComponentPropsWithoutRef<'div'>

export const Card = (props: Props) => {
  const { children, className, ...restProps } = props

  return (
    <div className={`${s.card} ${className}`} {...restProps}>
      {children}
    </div>
  )
}
