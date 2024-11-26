const products = [
    {
        id: "1",
        name: "Almohaditas Frutilla",
        price: 6800, 
        category: "almohaditas",
        img: "../src/assets/almohaditas.jpg",
        stock: 4,
        description: "1 kg de Almohaditas de Frutilla"
    },
    {
        id: "2",
        name: "Avena Instantánea",
        price: 1800,
        category: "avena",
        img: "../src/assets/avena.jpg",
        stock: 4,
        description: "Avena instantánea ideal para tus comidas"
        
    },
    {
        id: "3",
        name: "Barrita de Cereal Integra",
        price: 1200, 
        category: "barrascereal",
        img: "../src/assets/barrita-integra.jpg",
        stock: 4,
        description: "Barritas Integra, ¡Las mejores barritas!"
    },
    {
        id: "4", 
        name: "Barrita de Cereal Mueca", 
        price: 1200, 
        category: "barrascereal",
        img: "../src/assets/barrita-mueca.jpg",
        stock: 4,
        description: "Barritas Muecas, ¡Las mejores barritas!"
    },
];


export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products);
    }, 1500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        },1500);
    });
};

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1500);
    });
};