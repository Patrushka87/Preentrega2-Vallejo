import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext)


  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/116/116356.png";

  return (

    <Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
      {
        totalCantidad > 0 && <span> {totalCantidad} </span>
      }
    </Link>
  )
}

export default CartWidget