

import {  useState } from "react";

// export const [id,setId] =useState("")
export  const fetchApi =() => {
  fetch(`https://api.artic.edu/api/v1/artworks/129884`)
  .then((res)=>res.json())
  .then((data)=>{
   console.log(data)
  })
 }