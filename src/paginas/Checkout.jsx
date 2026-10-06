import { useState } from 'react'
import { Link, Navigate } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { formatoPeso } from '../datos/productos.js'

export default function Checkout({ carrito, onVaciar }) {
  const [comprado, setComprado] = useState(false)

  // Ruta protegida: sin productos no se puede pagar.
  // "replace" evita que el botón "atrás" nos devuelva aquí en bucle.
  if (carrito.length === 0 && !comprado) {
    return <Navigate to="/carrito" replace />
  }

  if (comprado) {
    return (
      <Alert variant="success">
        ¡Gracias por tu compra! <Link to="/catalogo">Seguir comprando</Link>
      </Alert>
    )
  }

  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  function confirmar() {
    setComprado(true)
    onVaciar()
  }

  return (
    <>
      <h1 className="h3 mb-3">Confirmar compra</h1>
      <p>
        Vas a pagar <strong>{formatoPeso(total)}</strong> por {carrito.length}{' '}
        {carrito.length === 1 ? 'producto' : 'productos'}.
      </p>
      <Button variant="success" onClick={confirmar}>Confirmar pago</Button>
    </>
  )
}
