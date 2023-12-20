type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement> ,id:number)=>void // its types vpid function to handle clikc function and its event type-- react-mouseEvent
}

export const Button = (props:ButtonProps) => {
  return (
   <>
   <button className= "m-4 bg-black text-white w-20 p-5 rounded-md" onClick={(event)=>props.handleClick(event,1)}>Click</button>
   </>
  )
}
