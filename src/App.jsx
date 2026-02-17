import React from 'react'
import Header from './Header';

const HEADER_TEXT = "React Fundamentals Training";
function App() {
  return (
    <>
      <Header text = {HEADER_TEXT}/>
      <h1>Welcome to React !</h1>
    </>
  )
}

export default App;
