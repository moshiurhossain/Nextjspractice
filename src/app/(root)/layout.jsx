import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const layout = ({ children }) => {
  return (
   <html>
    <body>
        <Header/>
        {children}
        <Footer/>
        </body>
   </html>
  )
}

export default layout