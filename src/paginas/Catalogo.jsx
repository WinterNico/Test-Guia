import { useSearchParams } from 'react-router'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import TarjetaProducto from '../componentes/TarjetaProducto.jsx'
import { categorias, productos } from '../datos/productos.js'

export default function Catalogo() {
  const [parametros, setParametros] = useSearchParams()
  const texto = parametros.get('buscar') ?? ''
  const categoria = parametros.get('categoria') ?? ''

  function actualizar(clave, valor) {
    const copia = new URLSearchParams(parametros)
    if (valor) copia.set(clave, valor)
    else copia.delete(clave)
    setParametros(copia)
  }

  const visibles = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(texto.toLowerCase()) &&
      (categoria === '' || p.categoria === categoria)
  )

  return (
    <>
      <h1 className="h3 mb-3">Catálogo</h1>

      <Row className="g-2 mb-4">
        <Col xs={12} md={8}>
          <Form.Control
            type="search"
            placeholder="Buscar producto..."
            value={texto}
            onChange={(e) => actualizar('buscar', e.target.value)}
          />
        </Col>
        <Col xs={12} md={4}>
          <Form.Select
            value={categoria}
            onChange={(e) => actualizar('categoria', e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categorias.map((c) => (
              <option key={c.valor} value={c.valor}>{c.etiqueta}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {visibles.length === 0 ? (
        <p className="text-muted">No encontramos productos con ese filtro.</p>
      ) : (
        // 1 columna en teléfono, 2 desde 576 px, 3 desde 992 px
        <Row xs={1} sm={2} lg={3} className="g-3">
          {visibles.map((producto) => (
            <Col key={producto.id}>
              <TarjetaProducto producto={producto} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
