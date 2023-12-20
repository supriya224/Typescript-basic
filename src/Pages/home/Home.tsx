// import { Button, Container, Input, People, Status } from "../../components/Index"
// import { DomRef, MutableRef } from "../../components/Index"
// import {  Box} from "../../components/Index"
// import { ThemeContextProvider } from "../../components/context/ThemeContext"

import {Toast } from "../../components/Index"

// import { CounterFunc } from "../../components/Index"
// import { Private } from "../../components/auth/Private"
// import { Profile } from "../../components/auth/Profile"


// const personName={
//   name:{
//     first:"neha",
//     last:"maurya",
//     message:true
//   }}

// const nameList = [{
//     first: "neha",
//     last: "maurya",
//     age: 23
//   }]

export const Home = () => {
  return (
    <div>
      <Toast position='center'/>
      {/* <RandomNum value={30} isNegative={true} isPositive={false} isZero={false}/> */}
      {/* <RandomNum value={30} isPositive/> */}
      {/* <List items={["batman","superman", "superwomen", "women", "men"]} onClick={(item)=>console.log(item)} /> */}
      {/* <List items={[
        {
        id:1,
        first:"neha",
        last:"maurya",
        age:23
      },{
        id:2,
        first:"neieha",
        last:"maurya",
        age:27
      },
      {
        id:3,
        first:"vhbhha",
        last:"maurya",
        age:20
      }
      ]} onClick={(item)=>console.log(item)} /> */}
      {/* <List items={[134,34,67,89,12,]} onClick={(item)=>console.log(item)} /> */}
      {/* <Private isLoggedIn={false} component={Profile}/>  //if it will be false then return  login*/}
      {/* <CounterFunc  message="the count value is"/> */}

      {/* <DomRef/>
      <MutableRef/> */}
      {/* <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}
      {/* <Counter/> */}
      {/* <User /> */}
      {/* <LoggedIn /> */}

      {/* <Status status="loading" />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Button handleClick={(event, id) => {
        console.log("clicked", event, id)
      }} />
      <People names={nameList} />  ye data peoplelist se aaya
      <Container  styles={{backgroundColor:" orange", padding:"23px", border:"1px solid black", margin:"6rem" }}/> 
      <Person name={personName}/> object type of daat 
      <PersonList names={nameList} /> */}
    </div>
  )
}