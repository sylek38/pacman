import React, { useState } from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';

function App() {

  const [score, setScore] = useState(2);

  return (
    <div className="header">
     <Header score = {score} />
     {/* {<Board />} */}
    </div>
  );
}

export default App;
