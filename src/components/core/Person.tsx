import React from 'react'

// object type of data
type Person={
    name:{
        first:string
        last:string
        message:boolean

    }
}
export const Person = (props:Person) => {
  return (
    <div>{props.name.first}
    <h1>{props.name.last}</h1>
    <h1>{props.name.message}</h1>
    </div>
  )
}
