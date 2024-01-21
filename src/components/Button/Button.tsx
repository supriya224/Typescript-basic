import React, { useState } from 'react'

interface MyButtonProps{
text:string| number|boolean,
onClick?:()=>void;
something?:boolean
}
// type Props={
// type:string
// onClick?:()=>void;
// }
export const Button:React.FC<MyButtonProps> = (props) => {
    const { text}= props;
    const [value, setValue]= useState(0)
  return (
    <div>
        <h1>{value}</h1>
<button onClick={()=>setValue(value+1)}>{text}</button>
</div>
  ) 
//    <button onClick={props.onClick}>{props.text}</button>

  
}
