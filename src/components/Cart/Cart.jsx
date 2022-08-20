import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { AiOutlineCar } from "react-icons/ai";
import './Cart.scss' 
import Modal from '../Modal/Modal'

/*  import firebase */
import db from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const Cart = () => {
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, clearProduct, totalCart, clearCart } = useContext(CartContext)
    const [success, setSuccess] = useState()
    
    // eslint-disable-next-line
    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.inCart
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalCart
    })
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        phone: '',
        email:''
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
    }

    return(
        <div className="checkout-page">
            <div className="info-checkout">
                <h3>Carrito de compras</h3>
                <span>TIENES { cartProducts.length } PRODUCTOS EN EL CARRO. <span>TOTAL</span> <b> USD {totalCart}</b></span>
                <p>Estos articulos no estan descontados de nuestro sistema, por lo que para que sean tuyos debes terminar el proceso de compra.</p>
                <div className="container-checkout-products">
                    {cartProducts.map( (cartProduct) => {
                        const { title, image, price, inCart} = cartProduct
                        return(
                            <div className="checkout-item">
                                <img src={`./assets/${image}`} alt="imagen de producto" />
                                <div className="info-checkout-item">
                                    <p>{title}</p>
                                    <p><AiOutlineCar/> Envio gratis por este mes</p>
                                    <p> Cantidad seleccionada: <b>{inCart}</b> </p>
                                    <p className="checkout-item-price">USD {price}</p>
                                    <button onClick={()=>clearProduct(cartProduct.id)}>X</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                <div className="info-subtotal">
                    <button onClick={() => setShowModal(true)}>IR A PAGAR</button>
                    <button onClick={() => clearCart()}>ELIMINAR CARRITO</button>
                            <div className="total-purchase">
                                <h3>RESUMEN DE PEDIDO</h3>
                                <div className="item-purchase">
                                    <p>{cartProducts.length} PRODUCTOS</p>
                                    <p>USD {totalCart}</p>
                                </div>
                                <div className="item-purchase">
                                    <p>ENTREGA</p>
                                    <p>GRATIS</p>
                                </div>
                                <div className="item-purchase">
                                    <p>TOTAL</p>
                                    <p> USD {totalCart}</p>
                                </div>
                            </div>
                </div>
                {showModal && 
                    <Modal title="INGRESO DE DATOS PARA PEDIDO" close={() => setShowModal()}>
                        {success ? (
                            <>
                            <h2>¡Muchas gracias por tu compra!</h2>
                            <h3>Su orden sera despachada a la brevedad, debajo le dejamos el identificador de su compra</h3>
                            <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                <label>NOMBRE</label>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Por favor, ingrese su nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <label>APELLIDO</label>
                                <input 
                                    type='text' 
                                    name='lastname' 
                                    placeholder='Por favor, ingrese su apellido'
                                    onChange={handleChange}
                                    value={formData.lastname}
                                />
                                <label>CONTACTO</label>
                                <input
                                    type='number' 
                                    name='phone' 
                                    placeholder='Por favor, ingrese su contacto' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <label>E-MAIL</label>
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Por favor, ingrese su e-mail'
                                    value={formData.email}
                                    onChange={handleChange}
                                />

                                <div className="info-subtotal">
                                    <button value="cart" type="submit" onClick={() => clearCart()}>Enviar</button>
                                </div>
                            </form>
                        )}
                    </Modal>
                }
        </div>
    )
}

export default Cart