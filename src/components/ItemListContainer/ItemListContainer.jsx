import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({article}) => {

    const [listProduct, setListProduct] = useState([])
    const {categoryid} = useParams()

    const getProducts = async () => {
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProduct(res)
        })
    }, [])

    return(
        <div className='list-products'>
        <h2>{article}</h2>
            <ItemList dataProducts={listProduct}/>
        </div>
    )
}

export default ItemListContainer