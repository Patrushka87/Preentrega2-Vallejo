import './Checkout.css'
import { useState, useEffect, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrderId] = useState("")

    const manejadorSubmit = (event) => {
        event.preventDefault()
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Por favor complete los campos')
            return
        }

        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrderId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) => {
                console.log("Error al crear la orden", error);
                setError("Se producjo un error al crear la orden, vuelva mas tarde")
            })
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorSubmit} className="formulario">
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p>Precio: $ {producto.item.precio} </p>
                        <hr />
                    </div>
                ))}
                <hr />

                <div className="formGroup">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>


                <div className="formGroup">
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="formGroup">
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="formGroup">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="formGroup">
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }
                <button type="submit" className='miBtn' > Finalizar orden </button>

                {
                    ordenId && (
                        <strong> ¡Gracias por tu compra! Tu numero de orden es: {ordenId} </strong>
                    )
                }

            </form>

        </div>
    )
}

export default Checkout
