import './ItemProduct.scss'

const ItemProduct = ({title, price, image}) => {
    return (
    <div className="item-product">
        <img src={`/assets/${image}`} alt="Imagen producto" />
        <p className="titulo">{title}</p>
        <span>US$ {price}</span>
        <button className="btn-bootstrap">Agregar a carrito</button>
    </div>
    )
}

export default ItemProduct;