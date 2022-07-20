import ItemProduct from "../ItemProduct/ItemProduct"

export const ItemListContainer = ({section}) => {
    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="Equipo Intel Core I5 11400f Pro Gamer – 16Gb 3200mhz – SSD – RTX3050" price={1250} image={'inteljpg.jpg'} />
            <ItemProduct title="Equipo AMD Ryzen 5 5600G Pro Gamer - 16 Gb - SSD - Radeon Graphics" price={690} image={'amd.jpg'} />
        </div>
    )
}

export default ItemListContainer;