import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './typography.module.scss'

type Variants =
  | 'large'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'link1'
  | 'link2'

type Props<T extends ElementType> = {
  variant?: Variants
  as?: T
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: Props<T>) => {
  const { as, variant = 'body1', className = '', ...restProps } = props

  const classNames = `${s[variant]} ${className}`
  const Component = as || (['h1', 'h2', 'h3'].includes(variant) ? (variant as T) : 'p')

  return <Component className={classNames} {...restProps} />
}
