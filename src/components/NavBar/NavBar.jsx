import './NavBar.scss'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar-primary'>
            <img src="/assets/tecnopc.png" alt="logo adidas" />
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Sobre Nosotros</button></li>
                <li><button>Contactanos</button></li>
                <li><button>Sorteos</button></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;