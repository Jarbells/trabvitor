import React, { useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import './MainLayout.css'
import { Outlet } from 'react-router-dom'

export default function MainLayout({children}){
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="container">
      {/* sidebar fora do wrapper de conteúdo */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* agrupei a header, main e footer pra mover juntos */}
      <div className={`content-wrapper ${sidebarOpen ? 'shifted' : ''}`}>
        
        <Header />
        
        <main className="main">
          {children ? children : <Outlet />}
        </main>
        
        <Footer />
        
      </div>
    </div>
  )
}