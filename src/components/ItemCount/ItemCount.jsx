import { useState } from "react";
import './ItemCount.scss'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ItemCount = ({initial, stock, setQuantitySelected}) => {

    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1)
    }
    const increase = () => {
        setCount(count + 1)
    }

    const onAdd = () => {
        setQuantitySelected(count)
    }


    return (
        <div className='countProd'>
            <div>
            <button disabled ={count <=1} onClick={decrease}><AiOutlineMinus/></button>
            <span>{count}</span>
            <button disabled ={count >= stock} onClick={increase}><AiOutlinePlus/></button>
            </div>
            <div>
                <button disabled = {stock <= 0} onClick={onAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;