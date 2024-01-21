import React from "react";

type BlogProps = {
  // name:string | number; // yha pe bs normal hm type define krte hai
  name: "neha" | "supriya" | "arti"; //ek se jada value dene k liye aise use krte hai
  id: number;
  address: {
    city: string;
    pincode: number;
  };
  // jb hme children data chaiye hota hai
  children: React.ReactNode; // as a children data lega jo kuch hoga print hoga
  styles:React.CSSProperties // as style data jha bhi render hoga color red ho jayeag

  lists: {
    name: string;
    // emmail:string |number;
  }[];
};
const Blog = (props: BlogProps) => {
  return (
    <div style={props.styles}>
      {props.name}

      <h1 >{props.id}</h1>
      <h1>{props.address.pincode}</h1>
      <h1>{props.address.city}</h1>
      <h1>{props.lists[0].name}</h1>
    </div>
  );
};

export default Blog;
