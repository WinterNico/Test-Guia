import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function BarraNavegacion({ totalItems }) {
  // Controla si el menú hamburguesa está abierto.
  const [abierta, setAbierta] = useState(false)
  const cerrar = () => setAbierta(false)

  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
      expanded={abierta}
      onToggle={setAbierta}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={cerrar}>
          Lo quieres, te lo vendo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            {/* "end" evita que Inicio quede activo en todas las rutas */}
            <Nav.Link as={NavLink} to="/" end onClick={cerrar}>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/catalogo" onClick={cerrar}>Catálogo</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros" onClick={cerrar}>Nosotros</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/carrito" onClick={cerrar}>
              🛒 Carrito{' '}
              {totalItems > 0 && <Badge bg="warning" text="dark">{totalItems}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
