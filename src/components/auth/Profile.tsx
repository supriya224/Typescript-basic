import React from 'react'

export type ProfileProps={
    name:string
}
export const Profile = ({name}:ProfileProps) => {
  return (
    <div>react component name is {name}</div>
  )
}
