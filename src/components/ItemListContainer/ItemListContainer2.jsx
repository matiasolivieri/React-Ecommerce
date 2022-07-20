import ItemProduct from "../ItemProduct/ItemProduct"

export const ItemListContainer2 = ({section}) => {
    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="GPU EVGA Geforce RTX 3080 FTW3 ULTRA 12Gb GDDR6X" price={1950} image={'nvidia.jpg'} />
            <ItemProduct title="GPU MSI Radeon RX6700 XT GAMING X 12G" price={1290} image={'radeon.jpg'} />
        </div>
    )
}

export default ItemListContainer2;