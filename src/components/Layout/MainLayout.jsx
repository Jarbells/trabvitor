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
      
      {/* overlay mobile fundo escuro que fecha o menu quando clicar */}
      <div 
        className={`mobile-overlay ${sidebarOpen ? 'active' : ''}`} 
        onClick={() => setSidebarOpen(false)}
      />

      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <div className={`content-wrapper ${sidebarOpen ? 'shifted' : ''}`}>
        
        {/* funcao de abrir fechar para o header */}
        <Header onToggleMenu={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="main">
          {children ? children : <Outlet />}
        </main>
        
        <Footer />
        
      </div>
    </div>
  )
}