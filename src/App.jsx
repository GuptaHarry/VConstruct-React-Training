import React from 'react'
import Header from './Header';

const H1_CONTENT ="Welcome to React !";
function App() {
  return (
    <>
      <Header text = {"React Fundamentals Training"}/>
      <h1>{H1_CONTENT}</h1>
    </>
  )
}

export default App;
