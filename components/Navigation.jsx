import Link from 'next/link'

function Navigation() {
  return (
    <div>
<ul>
  <li>
    <Link href="/">Inicio</Link>
  </li>
  <li>
    <Link href="/about">Sobre Nosotros</Link>
  </li>
  <li>
    <Link href="/recipebook">Recetario</Link>
  </li>
</ul>
    </div>
  )
}

export default Navigation
