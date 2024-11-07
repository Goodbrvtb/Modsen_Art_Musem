import { SEARCH_ENDPOINT } from "../constants/api";

export  const fetchApi =(inputData:string) => {
  return fetch(SEARCH_ENDPOINT(inputData))
  .then((res)=>res.json())
  .then((data)=>{
   console.log(data)
   return data
  })
 }