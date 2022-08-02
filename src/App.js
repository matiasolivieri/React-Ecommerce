import './App.scss'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contacto" element={<Contact/>}/>
                    <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
                    <Route path="/productos/:id" element={<Detail/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;