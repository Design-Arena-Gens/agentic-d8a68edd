export const metadata = {
  title: 'Job Switch Timing Calculator',
  description: 'Find the best time to switch your job',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
