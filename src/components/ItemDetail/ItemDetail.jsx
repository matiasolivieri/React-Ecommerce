import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { AiOutlineTag } from "react-icons/ai" 

const ItemDetail = ({products}) => {

    const {title , description,  price , image , stock}  = products
    
    return(
        <div className="container">
            <div className='detail'>
                <img className='detail-image' src={`/assets/${image}`} alt="Imagen producto" />
                    <div className='content'>
                    <h2>{title}</h2>
                    <h3>Envio gratis</h3>
                    <li> {description}</li>
                    <h4><AiOutlineTag /> Stock disponible: {stock}</h4>
                    <h1>USD {price}</h1>
                    <ItemCount initial={1} stock={stock}/>
                </div>
            </div>
        </div>
)}

export default ItemDetail;