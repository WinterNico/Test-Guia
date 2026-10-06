import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

import Layout from './componentes/Layout.jsx'
import Inicio from './paginas/Inicio.jsx'
import Catalogo from './paginas/Catalogo.jsx'
import DetalleProducto from './paginas/DetalleProducto.jsx'
import Carrito from './paginas/Carrito.jsx'
import Checkout from './paginas/Checkout.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import NoEncontrada from './paginas/NoEncontrada.jsx'

const CLAVE_CARRITO = 'lqtlv-carrito'

// Lee el carrito guardado. Si está corrupto, parte con el carrito vacío.
function leerCarritoGuardado() {
  try {
    const guardado = localStorage.getItem(CLAVE_CARRITO)
    return guardado ? JSON.parse(guardado) : []
  } catch {
    return []
  }
}

export default function App() {
  // El carrito vive aquí porque lo usan varias rutas (estado levantado).
  const [carrito, setCarrito] = useState(leerCarritoGuardado)

  // Cada vez que cambia el carrito, lo guardamos en localStorage.
  useEffect(() => {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito))
  }, [carrito])

  function agregar(producto) {
    setCarrito((actual) => {
      const existe = actual.find((item) => item.id === producto.id)
      if (existe) {
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      }
      return [...actual, { ...producto, cantidad: 1 }]
    })
  }

  function quitar(id) {
    setCarrito((actual) => actual.filter((item) => item.id !== id))
  }

  function vaciar() {
    setCarrito([])
  }

  const totalItems = carrito.reduce((suma, item) => suma + item.cantidad, 0)

  // El mapa del sitio. Las rutas hijas van dentro del Layout (Outlet).
  return (
    <Routes>
      <Route path="/" element={<Layout totalItems={totalItems} />}>
        <Route index element={<Inicio />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="producto/:id" element={<DetalleProducto onAgregar={agregar} />} />
        <Route path="carrito" element={<Carrito carrito={carrito} onQuitar={quitar} />} />
        <Route path="checkout" element={<Checkout carrito={carrito} onVaciar={vaciar} />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
