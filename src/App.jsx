
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



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
