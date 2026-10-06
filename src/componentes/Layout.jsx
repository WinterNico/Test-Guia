import { Outlet } from 'react-router'
import Container from 'react-bootstrap/Container'
import BarraNavegacion from './BarraNavegacion.jsx'
import PiePagina from './PiePagina.jsx'

// Plantilla: la barra y el pie se escriben UNA sola vez.
export default function Layout({ totalItems }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BarraNavegacion totalItems={totalItems} />
      <main className="flex-grow-1 py-4">
        <Container>
          <Outlet /> {/* aquí entra cada página */}
        </Container>
      </main>
      <PiePagina />
    </div>
  )
}
