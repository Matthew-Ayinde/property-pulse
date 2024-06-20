import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Pulse | Find the perfect rental',
  description: 'Find your dream rental property'
}

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout