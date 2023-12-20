// import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
// import { theme } from "./Theme";

export const Box = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>bhbrjtjij theme context</div>
  )
}
