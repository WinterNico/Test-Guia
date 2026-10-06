import { Link } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { formatoPeso } from '../datos/productos.js'

export default function Carrito({ carrito, onQuitar }) {
  if (carrito.length === 0) {
    return (
      <Alert variant="info">
        Tu carrito está vacío. <Link to="/catalogo">Ir al catálogo</Link>
      </Alert>
    )
  }

  const total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0)

  return (
    <>
      <h1 className="h3 mb-3">Tu carrito</h1>
      <ListGroup className="mb-3">
        {carrito.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex flex-wrap justify-content-between align-items-center gap-2"
          >
            <span>
              {item.emoji} {item.nombre} <small className="text-muted">× {item.cantidad}</small>
            </span>
            <span className="d-flex align-items-center gap-3">
              <strong>{formatoPeso(item.precio * item.cantidad)}</strong>
              <Button size="sm" variant="outline-danger" onClick={() => onQuitar(item.id)}>
                Quitar
              </Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="d-flex justify-content-between align-items-center">
        <span className="fs-5">Total: <strong>{formatoPeso(total)}</strong></span>
        <Link to="/checkout" className="btn btn-success">Ir a pagar</Link>
      </div>
    </>
  )
}
