import { useState } from "react";
import './ItemCount.scss'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ItemCount = ({initial, stock}) => {

    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }


    return (
        <div className='countProd'>
            <div>
            <button disabled ={count <=1} onClick={decrease}><AiOutlineMinus/></button>
            <span>{count}</span>
            <button disabled ={count >= stock} onClick={increase}><AiOutlinePlus/></button>
            </div>
            <div>
                <button disabled = {stock <= 0}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;