import './App.css'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer  />} />
        <Route path='/productos' element={<ItemListContainer  />} />
        <Route path='/category/:categoryid' element={<ItemListContainer  />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
