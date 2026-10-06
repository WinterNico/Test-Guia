import { Link, useLocation } from 'react-router'

export default function NoEncontrada() {
  const ubicacion = useLocation()

  return (
    <div className="text-center py-5">
      <h1 className="display-4">404</h1>
      <p>
        No encontramos nada en <code>{ubicacion.pathname}</code>
      </p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  )
}
