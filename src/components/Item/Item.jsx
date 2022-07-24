import './Item.scss'
import { AiFillHeart, AiOutlineCreditCard, AiTwotoneCar, AiOutlineTag } from "react-icons/ai" 
import ItemCount from '../ItemCount/ItemCount'

const Item = ({data}) => {
 
    const onAdd = (cantidad) =>{
        if (cantidad === 1) {
        console.log(`Agregaste al carrito ${cantidad} unidad de este producto`)
    } else {
        console.log(`Agregaste al carrito ${cantidad} unidades de este producto`)
    }
}

    const {title, image, price, stock} = data

    return(
        <div className="item-product">
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
                <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            </div>
        </div> 
    )
}

export default Item;