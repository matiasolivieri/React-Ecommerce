import './NavBar.scss'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom';

const NavBar = () => {

    const pages = ['About Us', 'Computers', 'Videocards', 'Monitores'];

    return(
        <div className='navbar-primary'>
            <Link to="/"><img src="/assets/tecnopc.png" alt="tecnopc"/></Link>
            <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to={`/category/${pages[1]}`}><li><button>Equipos</button></li></Link>
                <Link to={`/category/${pages[2]}`}><li><button>Tarjetas de video</button></li></Link>
                <Link to={`/category/${pages[3]}`}><li><button>Monitores</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;