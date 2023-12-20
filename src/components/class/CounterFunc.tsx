import React from 'react';

type CounterProps={
    message:string
}
type CounterState={
    count:number
}
export class CounterFunc extends React.Component<CounterProps, CounterState> {
 state={
    count:0,
 }
 handleClick=()=>{
    this.setState((prevState)=>({count: prevState.count +1}))
 }
 render(){
    return(
        <div>
            <button className='bg-red-400 m-9 p-8' onClick={this.handleClick}>Increment</button>
           <h1 className='bg-blue-900 text-white m-9 p-5 '>{this.props.message}</h1> 
           <h1  className='bg-green-900 text-white w-12 rounded-xl m-9 p-5 '>{this.state.count}</h1>
        </div>
    )
 }


}