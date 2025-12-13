import React from 'react'
import './Header.css'
import demoLogo from '../../assets/demo-logo.png'
import { useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

// função onToggleMenu vinda do MainLayout
export default function Header({ onToggleMenu }) {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="logo-container">
        <img src={demoLogo} alt="Logo" className="login-logo" />
        <span className="site-title">Gestão Escolar Digital</span>
      </div>

      <nav className="nav-desktop">
        <button className="button-nav" onClick={() => navigate('/inicio')}>Início</button>
        <button className="button-nav" onClick={() => navigate('/sobre')}>Sobre</button>
        <button className="button-nav" onClick={() => navigate('/contato')}>Contato</button>
      </nav>

      {/* botao hamburguer agora abre a sidebar principal */}
      <button className="menu-toggle" onClick={onToggleMenu}>
        <FiMenu size={24} />
      </button>

      {/* removi o nav-mobile velho pois a sidebar vai fazer esse papel */}
    </header>
  )
}