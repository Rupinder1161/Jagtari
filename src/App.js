import React from 'react';
import logo from './logo.svg';
import './App.css';
import Foodlist from './components/Foodlist'
import Header from './components/Header'
import Front from './components/front'
function App() {
  return (
    <div >
      {/* <Header/> */}
      <div className="App">
        <Front/>
      {/* <Foodlist/> */}
      </div>
      
    </div>
  );
}

export default App;
