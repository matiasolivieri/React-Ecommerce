import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import './Cart.scss' 
import Modal from '../Modal/Modal'
import db from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { AiOutlineCar } from "react-icons/ai";

const Cart = () => {
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, clearProduct, totalCart, clearCart } = useContext(CartContext)
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalCart
    })
    const [formData, setFormData] = useState({
        name: '',
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
                                <img src={`./assets/${image}`} alt="imagen" />
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
                    <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                        {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingrese el nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type='number' 
                                    name='phone' 
                                    placeholder='Ingrese el telefono' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Ingrese el mail'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                <button type="submit">Enviar</button>
                            </form>
                        )}
                    </Modal>
                }
        </div>
    )
}

export default Cart