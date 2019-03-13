import React, { useState, useEffect } from 'react';
import Counter from './component/Counter';
import ToDoList from './component/ToDoList';
import List from './component/List';
import PastDue from './component/PastDue';
import Accomplished from './component/Accomplished';
import * as moment from 'moment';
import { Menu, Icon } from 'antd';

import './App.css';

export default function App(){

const [view, setView]= useState('');
const [time, setTime]= useState('');
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
    setToDo([...todo, {text: events, time: moment().format('MMMM Do YYYY'), date: dates, isCompleted: false}]);


  }

  const removeItem =(index)=>{

      const newToDo= [...todo];
      newToDo.splice(index,1);
      setToDo(newToDo);

  }




  useEffect(()=>{
    setInterval(()=>setTime(moment().format('LTS')),1000)
  })


  const handleClick=(screens)=>{
    setView(screens.key)


}





    let display;

    switch(view){
      case 'past': display= <PastDue/>; break;
      case 'list': display= <List
        text={todo}
        remove={removeItem}
      />; break;
      case 'acommplished': display= <Accomplished/>; break;
      default: display =<List
        text={todo}
        remove={removeItem}
      />;

    }

    return (
      <div className="App">
        <Menu
            onClick={handleClick}

            mode="horizontal">
            <Menu.Item key="past">
              <Icon type="mail" />Past Due
            </Menu.Item>
            <Menu.Item key="list">
              <Icon type="mail" />List
            </Menu.Item>
            <Menu.Item key="acommplished">
              <Icon type="check" />Accomplished
            </Menu.Item>
        </Menu>

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

        {time}
      {display}




      </div>
    );
  }
