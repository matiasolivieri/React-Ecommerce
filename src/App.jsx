import './App.scss'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartPage from './pages/CartPage';
import CartProvider from './context/CartContext'

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
                        <Route path="/productos/:id" element={<Detail/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                    </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;