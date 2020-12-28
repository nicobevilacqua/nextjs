import React, { useContext } from 'react'
import { Context } from './ThemeContext'

export default function Component() {
  const [theme] = useContext(Context)
  return <div>{theme.name}</div>
}