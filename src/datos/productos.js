// Datos de ejemplo de la tienda "Lo quieres, te lo vendo".
export const productos = [
  { id: 1, nombre: 'Audífonos inalámbricos Onda', categoria: 'audio',       precio: 39990, emoji: '🎧', descripcion: 'Bluetooth 5.3, 30 horas de batería y cancelación de ruido.' },
  { id: 2, nombre: 'Parlante Roca',               categoria: 'audio',       precio: 54990, emoji: '🔊', descripcion: 'Parlante resistente al agua con sonido de 360 grados.' },
  { id: 3, nombre: 'Teclado mecánico Cordillera', categoria: 'computacion', precio: 74990, emoji: '⌨️', descripcion: 'Switches rojos, retroiluminado y formato compacto.' },
  { id: 4, nombre: 'Mouse Pehuén',                categoria: 'computacion', precio: 19990, emoji: '🖱️', descripcion: 'Mouse ergonómico inalámbrico con 3 niveles de DPI.' },
  { id: 5, nombre: 'Lámpara Aurora',              categoria: 'hogar',       precio: 24990, emoji: '💡', descripcion: 'Lámpara LED regulable con control de temperatura de color.' },
  { id: 6, nombre: 'Cafetera Volcán',             categoria: 'hogar',       precio: 44990, emoji: '☕', descripcion: 'Cafetera de goteo programable para 12 tazas.' },
  { id: 7, nombre: 'Monitor Altiplano 24"',       categoria: 'computacion', precio: 129990, emoji: '🖥️', descripcion: 'Panel IPS Full HD de 75 Hz, ideal para estudiar.' },
  { id: 8, nombre: 'Micrófono Cóndor',            categoria: 'audio',       precio: 49990, emoji: '🎙️', descripcion: 'Micrófono USB de condensador para streaming y clases.' },
]

export const categorias = [
  { valor: 'audio', etiqueta: 'Audio' },
  { valor: 'computacion', etiqueta: 'Computación' },
  { valor: 'hogar', etiqueta: 'Hogar' },
]

// Formatea un número como pesos chilenos: 39990 -> "$39.990"
export function formatoPeso(numero) {
  return '$' + numero.toLocaleString('es-CL')
}
