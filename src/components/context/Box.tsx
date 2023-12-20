// import React from 'react'
import React, { useContext } from 'react'
import { ThemeContext} from './ThemeContext'

export const Box = () => {
  const theme =useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme.primary.main}}>context</div>
  )
}
