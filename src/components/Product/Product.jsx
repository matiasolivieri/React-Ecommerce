import './Product.scss'
import { AiOutlineTag } from "react-icons/ai" 
import ItemCount from '../ItemCount/ItemCount'

const Product = ({data}) => {
 
    const onAdd = (cantidad) =>{
        if (cantidad === 1) {
        console.log(`Agregaste al carrito ${cantidad} unidad de este producto`)
    } else {
        console.log(`Agregaste al carrito ${cantidad} unidades de este producto`)
    }
}

    const {title, image, price, stock, features} = data

    return(
        <div className="container">
            <div className='detail'>
                <img className='detail-image' src={`/assets/${image}`} alt="Imagen producto" />
                    <div className='content'>
                    <h2>{title}</h2>
                    <h3>Envio gratis</h3>
                    <li> {features.one}</li>
                    <li> {features.two}</li>
                    <li> {features.three}</li>
                    <li> {features.four}</li>
                    <li> {features.five}</li>
                    <li> {features.six}</li>
                    <h4><AiOutlineTag /> Stock disponible: {stock}</h4>
                    <h1>USD {price}</h1>
                    <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                </div>
            </div>
        </div> 
    )
}

export default Product;