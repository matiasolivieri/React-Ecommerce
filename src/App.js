import './App.scss'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div className='container'>
        <NavBar/>
        <section className="main-container">
            <ItemListContainer section="Productos en oferta"/>
        </section>
        </div>
    );
}

export default App;