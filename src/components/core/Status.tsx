import React from 'react'

type StatusProps={
    status:string
}
export const Status = (props: StatusProps) => {
    let message;
    if(props.status ==='loading'){
        message ='loading....'
    }else if(props.status==='success'){
        message ='data successfully '
    } else if(props.status ==='error'){
        message='data error'
    }

  return (
    <div>
        <h1>
            status-- {message}
        </h1>
    </div>
  )
}
