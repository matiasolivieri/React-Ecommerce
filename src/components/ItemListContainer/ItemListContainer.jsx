import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({article}) => {

    const [listProduct, setListProduct] = useState([])
    const {categoryid} = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "productos")
        if (categoryid) {

            const cons = query(productsCollection, where("category", "==", categoryid))
            getDocs(cons).then(({docs}) => {
                setListProduct(docs.map((doc) => ({id: doc.id, ...doc.data() })))
            }).catch((error) => {
                console.log(error)
            })
        } else {
            getDocs(productsCollection).then(({docs}) => {
                setListProduct(docs.map((doc) => ({...doc.data(), id: doc.id})))
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [categoryid])

    return(
        <div className='list-products'>
        <h2>{article}</h2>
            <ItemList dataProducts={listProduct}/>
        </div>
    )
}

export default ItemListContainer