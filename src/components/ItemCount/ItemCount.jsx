import { useState, useContext } from "react";
import './ItemCount.scss'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ initial, stock, setQuantitySelected, productData }) => {

    const { addProductToCart } = useContext(CartContext)
    const [ count, setCount ] = useState(initial);

    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }

    const onAdd = () => {
        addProductToCart(productData, count)
        setQuantitySelected(count)
    }


    return (
        <div className='countProd'>
            <div>
                <button className='restar' disabled ={count <=1} onClick={decrease}><AiOutlineMinus/></button>
                    <span>{count}</span>
                <button className='agregar' disabled ={count >= stock} onClick={increase}><AiOutlinePlus/></button>
            </div>
            <div>
                <button className='carrito' disabled = {stock <= 0} onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;