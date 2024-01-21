// import { Button, Container, Input, People, Status } from "../../components/Index"
// import { DomRef, MutableRef } from "../../components/Index"
// import {  Box} from "../../components/Index"
// import { ThemeContextProvider } from "../../components/context/ThemeContext"

// import {Text} from "../../components/Index"

// import { CounterFunc } from "../../components/Index"
// import { Private } from "../../components/auth/Private"
// import { Profile } from "../../components/auth/Profile"
// import { Children } from "react";
// import { Event } from "../../components/Index";
import { Blog, Event } from "../../components/Index";

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
function Home() {
  const list = [
    {
      name: "hwllo wini"
      // email:"suourya234@gmail.com"
    }
  ];
  const addr = {
    city: "renukoot",
    pincode: 231217
  };
  return (
    <div className="bg-black">
      {/* blog component */}
      <Blog name="arti" id={23424} lists={list} address={addr} styles={{color:'white'}}>
        hello children data
      </Blog>
      <Event/>
      {/* <Event/> */}
      {/* <Button text="neha" onClick={()=>alert("okay its working")}/> */}
      {/* <Button onClick=""/> */}
      {/* <Text as="h1" size="lg">heading</Text>
      <Text as="p"  size="md">paragraph</Text>
      <Text as="label" htmlFor="someId"  size="sm" color="secondary">paragraph fdg</Text> */}
      {/* <Text/> */}
      {/* <Button variant="primary" onClick={()=>console.log('clicked')}>Primary button</Button> */}
      {/* // <Button> */}
      {/* <Toast position='center'/> */}
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
  );
}

export default Home;
