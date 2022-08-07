import { createContext, useState, useEffect } from "react";


const CartContext =createContext();


const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState([]);

    const [inCart, setInCart] = useState()


    useEffect(() => {
      }, [inCart])


    function addProductToCart(productData,ItemCounter){
        if(!cartProducts.includes(productData)){
            productData.inCart=ItemCounter;
            setCartProducts(cartProducts=> [...cartProducts, productData])
        } else{
            addUnitsToCart(productData,ItemCounter);
        }

    }

    function addUnitsToCart(productData,ItemCounter){
        let indexToUpdate= cartProducts.indexOf(productData)
        cartProducts[indexToUpdate].inCart=parseInt(cartProducts[indexToUpdate].inCart)+ItemCounter;
        setCartProducts(cartProducts);
    }

    function removeUnitFromCart(productData){
        if(productData.inCart>1){
            let indexToUpdate= cartProducts.indexOf(productData)
            cartProducts[indexToUpdate].inCart=parseInt(cartProducts[indexToUpdate].inCart)-1;
        } else{
            removeAllUnitsFromCart(productData);
        }
        
    }

    function removeAllUnitsFromCart(productData){
        let indexToDelete= cartProducts.indexOf(productData)
        cartProducts.splice(indexToDelete,1)
    }

    function buyCart(){
        console.log("por el momento, vaciar carrito y redirigir a mercadopago => LUEGO HACER PANTALLA DE FINALIZACION COMPRA")
        /* y vaciar carrito */
        clearCart();


    }

    function clearCart(){
        setCartProducts([]);
    }


    const data={
        cartProducts,
        addProductToCart,
        clearCart,
        removeUnitFromCart,
        removeAllUnitsFromCart,
        buyCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};