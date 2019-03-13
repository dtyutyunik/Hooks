import React from 'react';


export default function List(props){
  return(
    <div className='listContainer'>
      {props.text.map((e,index)=>{
        return <div className='list' key={index}>
          <p>Task:{e.text}</p>
          <p>Moment added: {e.time}</p>
          <p>Due date: {e.date}</p>
          <p>Outstanding time till completed: {e.diff}</p>
          <button onClick={()=>props.remove(index)}>-</button>
          </div>
      })}
    </div>
  )
}
