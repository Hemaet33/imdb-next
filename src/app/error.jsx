"use client"

import { useEffect } from "react"

export default function error(error,reset) {
    useEffect(()=>{
        console.log(error);
    },[error]);
  return (
    <div className="text-center mt-10">
        <h1>Somethong went wrong. Please try again later.</h1>
        <button className="text-amber-600" onClick={()=>reset()}>Try again</button>
    </div>
  )
}
