
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';



function App() {
  
  const bgcBlue = { backgroundColor: 'grey' }
  
  return (
    <div className="App" style={ bgcBlue }>
        <NavBar />
        <ItemDetailContainer />
        <ItemListContainer />
    </div>
  );
}

export default App;
