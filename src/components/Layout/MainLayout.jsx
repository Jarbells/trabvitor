import React, { useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import './MainLayout.css'
import { Outlet } from 'react-router-dom'

export default function MainLayout({children}){
  // estado pra controlar se a sidebar tá aberta ou fechada
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="container">
      <Header />
      
      {/* passei o estado e a função de controle para a sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* adicionei a classe shifted se a sidebar estiver aberta */}
      <main className={`main ${sidebarOpen ? 'shifted' : ''}`}>
        {children ? children : <Outlet />}
      </main>
      
      <Footer />
    </div>
  )
}