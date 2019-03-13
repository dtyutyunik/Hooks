import React, {useState} from 'react';

export default function Counter() {

  const [counter, setCounter]= useState(0);



  return(
    <div>

    <button onClick={()=>setCounter(counter+1)}> Increase </button>
    {counter}
    <button onClick={()=>setCounter(counter-1)}> Decrease </button>
    </div>

  )
}
