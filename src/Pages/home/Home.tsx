// import { Button, Container, Input, People, Status } from "../../components/Index"

import { LoggedIn } from "../../components/Index"


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
<LoggedIn/>
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