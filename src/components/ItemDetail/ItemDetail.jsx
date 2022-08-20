import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.scss'
import { AiOutlineTag } from "react-icons/ai" 
import { useState } from "react"
import { Link } from "react-router-dom"
import Checkout from "../Checkout/Checkout"

const ItemDetail = ({products}) => {

    const [quantitySelected, setQuantitySelected] = useState(0)

    const {title , description, price , image , stock}  = products
    
    return(
        <div className="container">
            <div className='detail'>
                <img className='detail-image' src={`/assets/${image}`} alt="Imagen producto" />
                    <div className='content'>
                    <h2>{title}</h2>
                    <h3>Envio gratis</h3>
                    <h5>OFERTA</h5>
                    <li> {description}</li>
                    <h4><AiOutlineTag /> Stock disponible: {stock}</h4>
                    <h1>USD {price}</h1>
                    {
                        quantitySelected > 0 ?  <Link to='/cart'><Checkout/></Link> : <ItemCount initial={1} stock={stock} setQuantitySelected={setQuantitySelected} productData={products}/>
                    }
                    
                </div>
            </div>
        </div>
)}

export default ItemDetail;