const productos = [
  { nombre: "Yerba", precio: 500, id: "1", stock: 10, img: "../img/yerba.jpg", idCat: "3" },
  { nombre: "Fideos", precio: 180, id: "2", stock: 10, img: "../img/fideos.jpg", idCat: "2" },
  { nombre: "Arroz", precio: 200, id: "3", stock: 10, img: "../img/arroz.jpg", idCat: "2" },
  { nombre: "Aceite", precio: 900, id: "4", stock:10, img: "../img/aceite.jpg", idCat: "3" },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
    return new Promise(resolve => { 
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)
        }, 2000);
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productosCategoria =productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100);
    })
}