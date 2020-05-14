import React from 'react';
import logo from './logo.svg';
import './App.css';
import Foodlist from './components/Foodlist'
import Header from './components/Header'
function App() {
  return (
    <div >
      <Header/>
      <div className="App">
      <Foodlist/>
      </div>
      
    </div>
  );
}

export default App;
