import './Item.scss'
import { AiFillHeart, AiOutlineCreditCard, AiTwotoneCar, AiOutlineTag } from "react-icons/ai" 
import {Link} from 'react-router-dom'

const Item = ({data}) => {

    const {title, inCart, image, price, stock, id} = data

    return(
        
        <div className="item-product">
        <Link to={`/productos/${id}`}>
            <div className='float-options'>
                <p>ENVIO FLASH</p>
                <button><AiFillHeart /></button>
            </div>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <p><AiOutlineCreditCard /> 12 Cuotas sin interés</p>
                <p><AiTwotoneCar />Los envios se hacen en el día</p>
                <p><AiOutlineTag />Stock disponible: {stock}</p>
                <h1>USD {price}</h1>
            </div>
            </Link>
        </div> 
        
    )
}

export default Item;