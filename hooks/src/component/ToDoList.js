import React, {useState, useEffect} from 'react';
import List from './List';
import * as moment from 'moment';

export default function ToDoList(){

const [todo, setToDo]= useState([

  { text: 'Do hooks',
    time: moment().format('MMMM Do YYYY'),
    date: 'none',
    isCompleted: false,
  },
  { text: 'Become better at hooks',
    time: moment().format('MMMM Do YYYY'),
    date: 'none',
    isCompleted: false
  },
  { text: 'Get a job',
    time: moment().format('MMMM Do YYYY'),
    date: 'none',
    isCompleted: false
  }

]);

  const [item, setItem]= useState({});
  const [timeNow, setTimeNow]=useState('');
  const [dates, setDates]=useState('');
  const [events, setEvents]=useState('');


  const onSubmit = (e) => {
    e.preventDefault();

    console.log('events is', events);

      // setItem({text: events, time: 'no time like the present', date: dates, isCompleted: false})
     setToDo([...todo, {text: events, time: moment().format('MMMM Do YYYY'), date: dates, isCompleted: false}]);
    console.log(todo);
    console.log('DATES IS ', dates);

  }

  const removeItem =(index)=>{

      const newToDo= [...todo];
      newToDo.splice(index,1);
      setToDo(newToDo);

  }



return(
  <div>

  <h1>To Do list</h1>

  <form onSubmit={onSubmit}>
    <input type='text'
    placeholder='add an event'
    value={events}
    onChange={(e)=>setEvents(e.target.value)}
    name='Events'
    required/>
    <input type='date' name='Dates' value={dates} onChange={(e)=>setDates(e.target.value)} required/>




    <button type="submit"> Add </button>
  </form>

  <div>



       </div>



  <List
    text={todo}
    remove={removeItem}
  />






  </div>
)



}
