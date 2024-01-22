/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useState} from 'react'

type IUserForm={
    name:string;
    email:string| number;
    age:number;
}
const State = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isDisable, setIsDisable]=useState();
    const [inputField, setInputField]=useState<IUserForm>({
        name:'',
        email:'',
        age:10,

    })

  return (
    <div className='bg-red-300'>
        <h2>{inputField.age}
        
        </h2>
    </div>
  )
}

export default State