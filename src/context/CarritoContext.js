import { useState, createContext } from 'react';

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ Children }) => {
    const [carrito, setCarrito] = useState([]);

    console.log(Children);

    const agregarProducto = (item, cantidad) => {
        if (!yaEstaEnCarrito(item.id)) {
            setCarrito((prev) => [...prev, { item, cantidad }]);
        } else {
            console.log('Producto ya agregado');
        }
    };

    const yaEstaEnCarrito = (id) => {
        return carrito.some((prod) => prod.id === id);
    };

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter((prod) => prod.id !== id);
        setCarrito(carritoActualizado);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarProducto,
                eliminarProducto,
                vaciarCarrito,
            }}
        >
            {Children}
        </CarritoContext.Provider>
    );
};
