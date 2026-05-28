export const metadata = {
  title: 'فلاش',
  description: 'شبكة اجتماعية',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, padding: 0, background: "#0a0a0a" }}>
        {children}
      </body>
    </html>
  )
}
