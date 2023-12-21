import React from 'react'

type ButtonProps={
    variant:'primary' | 'secondary'
    children:string
} & Omit< React.ComponentProps<'button'>, 'children'>
export const Button = ({variant, children, ...rest}:ButtonProps) => {
  return (
    <button className={`bg-blue-500 p-9 m-9  ${variant}`} {...rest}>{children}</button>
  )
}

