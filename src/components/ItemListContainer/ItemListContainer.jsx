import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({article}) => {

    const [listProduct, setlistProduct] = useState([])
    const {categoryid} = useParams()
    const filterByCategory = products.filter((products) => products.category === categoryid)

    const getProducts  = () => new Promise ((resolve, reject)=>{
        setTimeout(() =>{
  
          if (categoryid === "Computers" || categoryid === "Videocards" || categoryid === "Monitores"){
              resolve (filterByCategory)
          }
          else{
                resolve (products)
          }
        })
    })
  
    useEffect(() => {
      const getProduct = async () => {
  
        try{
            const responseLog = await getProducts()
            setlistProduct(responseLog)
        }
        catch(error){
           console.log(error)
        }
    }
      getProduct()
    }, )

    return(
        <div className='list-products'>
        <h2>{article}</h2>
            <ItemList dataProducts={listProduct}/>
        </div>
    )
}

export default ItemListContainer