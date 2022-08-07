import ItemProduct from "../Item/Item"

const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {    
                return ( 
                    <ItemProduct key={product.id} data={product}/>
            )})}
        </>
    )
}

export default ItemList;