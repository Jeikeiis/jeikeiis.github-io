import Link from "next/link";

function Navigator() {
  return (
    <ul>
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/about">Sobre nosotros</Link>
      </li>
      <li>
        <Link href="/services">Recetario</Link>
      </li>
    </ul>
  );
}
