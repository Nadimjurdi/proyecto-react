import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/NavBar/NavBar";
import {ItemCount} from "./components/ItemCount/ItemCount"
import { Pika } from './components/Pika/Pika';
import {
   BrowserRouter as Router, 
  Routes,
  Navigate,
  Route} from 'react-router-dom';
import { ItemDetail } from './components/ItemDetail/ItemDetail';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className='App'>
        <Router>
          <NavBar/>
          <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              {/* Route usado para pikachu */}
              {/* <Route path='/pika' element={<Pika/>} /> */}
              <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/counter' element={ <ItemCount initial={1} stock={10} onAdd={(counter)=> console.log(`Cantidad Agregada ${counter}`)}/>}/>
              <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/' element={<ItemCount/>}/>
              <Route path='*' element={<Navigate to='/'/>}/>
          </Routes>
        </Router>
    </div>
     );
}

export default App;
