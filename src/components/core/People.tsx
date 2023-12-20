import React from 'react'
import { Name } from '../../interface/Interface.type'

type PeopleListProps={
  names:Name[]  //data interface ke type se aa rha type me data name se save

}
export const People = (props:PeopleListProps) => {
  return (
    <div>
      {
        props.names.map((name)=>{
          return (
            <p key={name.first}>My name is {name.first} {name.last} and age {name.age}</p>
          )
        })
      }
    
    </div>
  )
}
