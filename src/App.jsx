import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  
  const bgcBlue = { backgroundColor: 'grey' }
  
  return (
    <div className="App" style={ bgcBlue }>
        <NavBar />
        <ItemListContainer />
    
    </div>
  );
}

export default App;
