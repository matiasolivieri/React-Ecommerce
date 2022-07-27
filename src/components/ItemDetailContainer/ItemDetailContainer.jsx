import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import product from '../../utils/product.mock'

const ItemDetailContainer = ({section}) => {

    const [oneProduct, setOneProduct] = useState([])

    const getProduct = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(product)
        }, 2000)
    })

    useEffect(() => {
        getProduct
            .then( (res) => { 
                setOneProduct(res)
            })
            .catch( (error) => { 
                console.log("La llamada fallo")
            })
            .finally( () => { 
            })
    })

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemDetail dataProducts={oneProduct}/>
        </div>
    )
}

export default ItemDetailContainer;