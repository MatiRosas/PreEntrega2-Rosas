import {Link} from "react-router-dom";


export default function ItemDetail({name, img, description, category, price, stock}) {
    return (
    <div className="detail">
        <h3>{name}</h3>
            <div className="card">
                <img 
                src={img}
                style={{width:250}}
                className="card-img-top"
                alt={name}
                />
            
            <div className="card-body">
                <p>{description}</p>
                <p>Categoría: {category}</p>
                <p>Precio: ${price}</p>
                <p>Disponible: {stock} unidades en stock</p>
            </div>
            <Link to="/cart" className="link-compra"> Finalizar Compra </Link>
            </div>
    </div>
    )
}


