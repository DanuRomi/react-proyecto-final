import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error'
import CartContextProvider from './context/CartContext'
import Cart from './Components/Cart'
import Checkout from './Pages/Checkout'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer mensaje="Productos" />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer mensaje="Productos" />} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/checkout/:ordenId' element={<Checkout />} />
            <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App