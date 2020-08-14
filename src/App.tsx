/** @jsx jsx */
import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import { Task } from './components/Types'
import { jsx, css } from '@emotion/core';

const initialState: Task[] = [
  {
    id: 2,
    title: 'にこめ',
    done: false
  },{
    id: 1, 
    title: 'いっこめ',
    done: true
  }
]

const App:React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks}></TaskInput>
      <TaskList setTasks={setTasks} tasks={tasks}></TaskList>
    </div>
  );
}

export default App;
