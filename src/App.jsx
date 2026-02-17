import React from 'react';
import TaskItem from './TaskItem.jsx';
import TaskItem2 from './TaskItem2.jsx';
const TASKS =  [ 
{ id: 101, title: "Setup project" }, 
{ id: 102, title: "Learn JSX" }, 
{ id: 103, title: "Understand Props" }, 
{ id: 104, title: "Render Lists" } 
]; 

function App() {
  return (
    <>
      {/* Method -1  */}
      <h1>Method -1</h1>
      <ul>
        { TASKS.map( task => <TaskItem key={task.id} title={task.title} />)}
      </ul>
  

      {/* Method -2  */}
      <h1>Method -2</h1>
      <ul>
        {  TASKS.map( task=>{
        
         return  (
              
             <TaskItem2 key={task.id} > 
            {task}
          </TaskItem2>
        
            )
          
        })}
      </ul>
    </>
  )
}

export default App
