import Product from "../Product/Product"

const ItemDetail = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {    
                return ( 
                    <Product key={product.id} data={product}/>
            )})}
        </>
    )
}

export default ItemDetail;