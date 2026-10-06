import { Link } from 'react-router'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import TarjetaProducto from '../componentes/TarjetaProducto.jsx'
import { productos } from '../datos/productos.js'

export default function Inicio() {
  const destacados = productos.slice(0, 3)

  return (
    <>
      <div className="text-center py-5">
        <h1 className="display-5 fw-bold">Lo quieres, te lo vendo</h1>
        <p className="lead">Tecnología y hogar al mejor precio, con envío a todo Chile.</p>
        <Link to="/catalogo" className="btn btn-primary btn-lg">
          Ver catálogo
        </Link>
      </div>

      <h2 className="h4 mb-3">Productos destacados</h2>
      <Row xs={1} sm={2} lg={3} className="g-3">
        {destacados.map((producto) => (
          <Col key={producto.id}>
            <TarjetaProducto producto={producto} />
          </Col>
        ))}
      </Row>
    </>
  )
}
