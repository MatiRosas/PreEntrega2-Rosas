import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function ItemDetailContainer()  {
  const [product, setProduct] = useState ({})
  const {productId} = useParams ()

  useEffect(() => {
    getProductsById(productId)
      .then((resp) => {
        setProduct(resp)
      })
  }, [productId])

    return (
    <div className="contain-detail">
    <h3 className="detalle-title">Detalle del producto</h3>
    <hr />
    <ItemDetail {...product} />
    </div>
  );
}


