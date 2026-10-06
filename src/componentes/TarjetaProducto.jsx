import { Link } from 'react-router'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import { formatoPeso } from '../datos/productos.js'

// Componente reutilizable: recibe todo por props y no sabe en qué ruta está.
export default function TarjetaProducto({ producto }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column text-center">
        <div className="emoji-producto mb-3">{producto.emoji}</div>
        <Card.Title>{producto.nombre}</Card.Title>
        <div className="mb-2">
          <Badge bg="secondary">{producto.categoria}</Badge>
        </div>
        <Card.Text className="fw-bold">{formatoPeso(producto.precio)}</Card.Text>
        {/* mt-auto empuja el botón hacia abajo en todas las tarjetas */}
        <Link to={`/producto/${producto.id}`} className="btn btn-primary mt-auto">
          Ver detalle
        </Link>
      </Card.Body>
    </Card>
  )
}
