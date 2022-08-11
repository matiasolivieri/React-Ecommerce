import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider =({children})=>{
    const [cartProducts, setCartProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalCart, setTotalCart] = useState(0)
    const [inCart, setInCart] = useState()

    useEffect(() => {
      }, [inCart])

    function addProductToCart(productData,ItemCounter){
        if(!cartProducts.includes(productData)){
            productData.inCart=ItemCounter;
            setTotalProducts(totalProducts + productData.inCart)
            setCartProducts(cartProducts=> [...cartProducts, productData])
        } else{
            addUnitsToCart(productData,ItemCounter);
        }
        setTotalCart(
            totalCart + productData.price * productData.inCart
        )

    }

    function addUnitsToCart(productData,ItemCounter){
        let indexToUpdate= cartProducts.indexOf(productData)
        cartProducts[indexToUpdate].inCart=parseInt(cartProducts[indexToUpdate].inCart)+ItemCounter;
        setCartProducts(cartProducts);
    }

    const clearProduct = ( id ) => {
        const prod = cartProducts.find((product) => product.id === id)
        setTotalCart(
            totalCart - prod.price * prod.inCart
        )
        setTotalProducts(totalProducts - prod.inCart)
        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts(newCart);
    }

    function removeAllUnitsFromCart(productData){
        let indexToDelete= cartProducts.indexOf(productData)
        cartProducts.splice(indexToDelete,1)
    }

    function buyCart(){
        clearCart();
    }

    function clearCart(){
        setCartProducts([])
        setTotalProducts(0)
        setTotalCart(0)
    }


    const data={
        cartProducts,
        addProductToCart,
        clearCart,
        clearProduct,
        removeAllUnitsFromCart,
        buyCart,
        totalProducts,
        totalCart
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
export {CartContext};