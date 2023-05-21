import React from 'react'
import './ItemDetail.css'


const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur rerum magnam tempora culpa! Nulla, ipsam est assumenda ut rerum id praesentium veritatis quam aspernatur, repellat, suscipit fugiat. Sunt, error facere.</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail
