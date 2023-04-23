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
}): JSX.Element {
  return (
    <html lang="es">
      <body>
        <div className="flex">
        <div className="header"><br />
        <div className="introheader1"><h1>Nutrición</h1></div></div>
        <div className="sidebar1">
        <div className="introinsidebar1">
          <Navigation />
        </div>
    </div>
      </div>
      {children}
    </body>
    </html>
  )
}
