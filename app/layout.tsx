import Navigation from "../components/Navigation";
import './globals.css'

export const metadata = {
  title: 'Nutrición',
  description: 'Página de nutrición',
  keywords: 'next,react,app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        {children}</body>
    </html>
  )
}
