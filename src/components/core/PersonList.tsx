import React from 'react'


// these typescript is an array types
type PersonListProps = {
  names: {  
    first: string
    last: string
    age: number
  }[] //it use for mapping to this object

}

export const PersonList = (props: PersonListProps) => {

  return (
    <div>{props.names.map(name => {
      return (
        <h1 key={name.first}> my name is {name.first} {name.last} and my age  {name.age} </h1>
      )
    })}</div>
  )
}
