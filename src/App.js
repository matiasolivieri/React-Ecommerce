import './App.scss'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';

function App() {
    return (
        <>
        <NavBar/>
            <div className='main-container'>
                <ItemListContainer section="Equipos armados"/>
                <ItemListContainer2 section="Tarjetas de video"/>
            </div>
        </>
    );
}

export default App;