import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';


function App() {
  
  const [count, setCount] = useState(0)
  const bgcBlue = { backgroundColor: 'blue' }
  
  return (
    <div className="App" style={ bgcBlue }>
        <NavBar />
        <ItemListContainer />
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
