import React from 'react';
import User from './User.jsx';

const USERS = [
  { id: 1, name: 'Alice' ,role:'Developer' , isOnline:true},
  { id: 2, name: 'Bob' , role:'Designer' , isOnline:false},
  { id: 3, name: 'Charlie', role:'Manager' , isOnline:true},
  { id: 4, name: 'Diana' , role:'Intern' , isOnline:false},
]
function App() {
  return (
    <>
    {
      USERS.map(user=><User name={user.name} role={user.role} isOnline={user.isOnline} key={user.id}/>)
    }
    </>
  )
}

export default App
