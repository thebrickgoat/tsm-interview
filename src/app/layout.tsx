import { Metadata } from 'next'
 
export const metadata: Metadata = {
    title: "Star Wars Films",
    description: "A list of Star Wars films",
}
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }