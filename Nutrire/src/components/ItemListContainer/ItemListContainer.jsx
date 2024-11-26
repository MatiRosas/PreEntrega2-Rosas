import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer () {
    const [products, setProducts] = useState ([])
    const {categoryId} = useParams()
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts 
            asyncFunction(categoryId)
            .then(data => setProducts(data))
        
    }, [categoryId])



    return (
        <div className="bienvenida">
            <h2> ¡Bienvenidos a NUTRIRE!</h2>
            <br />
            <ItemList products={products} />
        </div>
    )
}
