import React from 'react'

const Events = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const apiHit=(event:React.MouseEvent<HTMLSpanElement>)=>{
        console.log("hello puja")
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
console.log(event.target.value)
    }
  return (
    <div className='text-white'>
        {/* <HTMLButtonElement> */}
        <button className='text-white' onClick={(event)=>apiHit(event)}>Event click</button>   
        <input className='text-black' type='text' value="" onChange={handleChange} placeholder='enter value'  />
        {/* <HTMLSpanElement> for span  */}
        {/* <span onClick={(event)=>apiHit(event)}>Event click</span> */}
    </div>
  )
}

export default Events