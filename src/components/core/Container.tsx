import React from 'react'

type ContainerProps={
  styles:React.CSSProperties
}
export const Container = (props:ContainerProps) => {
    return (
        <div className='container'>
            {/* <h1 style={{backgroundColor:" orange", padding:"23px" }}>Hello my dear start kro </h1> */}
            <h1 style={props.styles}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Impedit dolorem iure quos blanditiis placeat earum minima pariatur
                  libero aperiam, cum et quod expedita sed, voluptas nam velit ducimus dicta optio?</h1>
        </div>
    )
}
