import './globals.css'

export const metadata = {
  title: 'Rob Treese',
  description: 'Builder of winning automation tools and scripts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
