import './NavBar.scss'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const pages = ['Computadoras', 'Videocards', 'Monitores', 'Consolas', 'Procesadores', 'Sillas Gamer'];

    return(
        <div className='navbar-primary'>
            <Link to="/"><img src="/assets/tecnopc.png" alt="tecnopc"/></Link>
                <ul>
                    <Link to={`/category/${pages[0]}`}><li><button>Computadoras</button></li></Link>
                    <Link to={`/category/${pages[1]}`}><li><button>Tarjetas Graficas</button></li></Link>
                    <Link to={`/category/${pages[2]}`}><li><button>Monitores</button></li></Link>
                    <Link to={`/category/${pages[3]}`}><li><button>Consolas</button></li></Link>
                    <Link to={`/category/${pages[4]}`}><li><button>Procesadores</button></li></Link>
                    <Link to={`/category/${pages[5]}`}><li><button>Sillas Gamer</button></li></Link>
                </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;