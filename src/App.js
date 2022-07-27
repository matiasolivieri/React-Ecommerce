import './App.scss'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
    return (
        <div>
        <NavBar/>
        <section className="main-container">
            <ItemDetailContainer section="Detalle del producto"/>
        </section>
        </div>
    );
}

export default App;