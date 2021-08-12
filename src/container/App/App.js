import './App.css';
import HomePage from '../../components/HomePage/HomePage';
import initFontAwesome from '../../components/lib/initFontAwesome';
import React from 'react';
initFontAwesome();

function App() {
  return (
    <div className="App">
    <HomePage/>
    </div>
  );
}

export default App;
