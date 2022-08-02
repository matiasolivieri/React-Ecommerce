import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.scss'
import products from '../../utils/products.mock'
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {

    const [Item, setItem] = useState([])
    const {id} = useParams()
    const filterId = products.filter( (products) => products.id === Number(id) )

    const getItem  = () => new Promise ((resolve, reject)=>{
        setTimeout(() =>{
       
          resolve (filterId[0])
        
        }, 2000)
       
    })

    useEffect(() => {
  
        const ItemAwait = async () => {
   
         try{
        
             const responseLog = await getItem()
           
             
             setItem(responseLog)
         }
   
   
         catch(error){
   
            console.log(error)
   
         }
   
   
     }

     ItemAwait()
  
    }, [])

    return(
        <div className='list-products'>
            <ItemDetail products={Item}/>
        </div>
    )
}

export default ItemDetailContainer;