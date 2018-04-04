import React from 'react'

const Button = ({ children, ...propsWithoutChildren }) =>
  <button {...propsWithoutChildren}>{children}</button>

export default Button
