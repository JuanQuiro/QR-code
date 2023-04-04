import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="flex bg-[#D6E1F0] justify-center items-center h-full w-full" lang="en">
      <body >{children}</body>
    </html>
  )
}
