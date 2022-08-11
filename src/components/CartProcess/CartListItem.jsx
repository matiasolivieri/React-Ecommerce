import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import './CartListItem.scss';

const CartListItem = () => {
    const { cartProducts, clearProduct, totalCart, clearCart } = useContext(CartContext)

    console.log(totalCart)

    return (
        <div>
            { cartProducts.length > 0 ? 
                <><p className='card-stock'>Tienes <b>{ cartProducts.length }</b> productos diferentes en tu carro de compras. </p>

                { cartProducts.map((product) => {
                    let TotalPrice =+ product.price * product.inCart;

                    return(
                        <div className="cart">
                            <div className="cart" key={product.id}>
                                <div className="products">
                                    <div className="prodTotal cartSection">
                                        <div className="product-name">
                                        <img className='product' src={`/assets/${product.image}`} alt="" />
                                            <h5>{product.title}</h5>
                                            <p className="product-price"> Precio unitario: <b>USD {product.price}</b></p>
                                            <p className="product-quantity">Cantidad seleccionada: <b>{ product.inCart }</b></p>
                                            <button className='product-remove' onClick={()=>clearProduct(product.id)}>Eliminar producto</button>
                                        </div>
                                    </div>
                                    <div className="cart-total">
                                        <span>Subtotal:</span>
                                        <h4>USD { TotalPrice }</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                }) }

                <div className="row">
                    <div className="col s10">
                        <div className="card-action">
                            <button className='product-removetodo' onClick={() => clearCart()}>Borrar todo</button>
                        </div>
                    </div>

                    <div className="col s2">
                        Total final: <b>USD { totalCart }</b>
                    </div>
                </div>
                </>
                : 
                <>
                    <div>No tienes productos en el carrito</div>
                    <Link to="/">Regresar a la tienda</Link>
                </>
            }
        </div>
    )
}

export default CartListItem
