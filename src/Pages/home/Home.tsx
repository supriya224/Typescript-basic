import { Button, Input, Status } from "../../components/Index"


// const personName={

//     first:"neha",
//     last:"maurya",
//     message:true

// }

// const nameList = [
//   {
//     first: "neha",
//     last: "maurya",
//     age: 23
//   }
// ]
export const Home = () => {
  return (
    <div>

      <Status status="loading" />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Button handleClick={(event, id) => {
        console.log("clicked", event, id)
      }} />
      {/* <Person name={personName}/> object type of daat  */}
      {/* <PersonList names={nameList} /> */}
    </div>
  )
}