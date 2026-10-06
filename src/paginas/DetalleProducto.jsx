import { Link, useNavigate, useParams } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { formatoPeso, productos } from '../datos/productos.js'

export default function DetalleProducto({ onAgregar }) {
  const { id } = useParams() 
  const navegar = useNavigate()


  const producto = productos.find((p) => p.id === Number(id))

  if (!producto) {
    return (
      <Alert variant="warning">
        No existe el producto {id}.{' '}
        <Link to="/catalogo">Volver al catálogo</Link>
      </Alert>
    )
  }

  function agregar() {
    onAgregar(producto)
    navegar('/carrito')
  }

  return (
    <Row className="g-4 align-items-center">
      <Col xs={12} md={5} className="text-center">
        <div className="emoji-detalle">{producto.emoji}</div>
      </Col>
      <Col xs={12} md={7}>
        <Badge bg="secondary" className="mb-2">{producto.categoria}</Badge>
        <h1 className="h2">{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p className="fs-4 fw-bold">{formatoPeso(producto.precio)}</p>
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={agregar}>Agregar al carrito</Button>
          <Button variant="outline-secondary" onClick={() => navegar(-1)}>Volver</Button>
        </div>
      </Col>
    </Row>
  )
}
