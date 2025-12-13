import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiHome, FiUser, FiCalendar, FiSettings, FiList, FiAlertCircle, FiDatabase, FiFile, FiInfo, FiPhone } from 'react-icons/fi'
import './Sidebar.css'

export default function Sidebar({ isOpen, setIsOpen }){
  const triggerRef = useRef(null)
  const sidebarRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const trigger = triggerRef.current
    const sidebar = sidebarRef.current
    let timeout = null

    function onEnter() {
      clearTimeout(timeout)
      setIsOpen(true)
    }
    function onLeave() {
      timeout = setTimeout(()=> setIsOpen(false), 250)
    }

    // eventos de mouse - pc
    trigger.addEventListener('mouseenter', onEnter)
    sidebar.addEventListener('mouseenter', onEnter)
    sidebar.addEventListener('mouseleave', onLeave)

    // fecha se o mouse for para longe - pc
    function onMove(e){
      if(!isOpen) return
      // aumentei a tolerancia para evitar fechar acidentalmente
      if(e.clientX > 350 && !sidebar.matches(':hover') && !trigger.matches(':hover')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousemove', onMove)

    return () => {
      trigger.removeEventListener('mouseenter', onEnter)
      sidebar.removeEventListener('mouseenter', onEnter)
      sidebar.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mousemove', onMove)
    }
  }, [isOpen, setIsOpen])

  return (
    <>
      <div id="sidebar-trigger" ref={triggerRef} />
      <aside id="sidebar" ref={sidebarRef} className={isOpen ? 'open sidebar' : 'sidebar'}>
        <div className="menu-header">Menu</div>
        <ul className="menu-topicos">
          {/* links de nav geral aqui para facilitar no mobile */}
          <li><button className="button-sidebar" onClick={()=>navigate('/inicio')}><FiHome/> Início</button></li>
          
          <li><button className="button-sidebar" onClick={()=>navigate('/dashboard')}><FiSettings/> Dashboard</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/alertas')}><FiAlertCircle/> Alertas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-aluno')}><FiDatabase/> Cadastro Aluno</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-professores')}><FiDatabase/> Cadastro Professores</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-periodo-letivo')}><FiDatabase/> Cadastro Período Letivo</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-disciplina')}><FiDatabase/> Cadastro Disciplina</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-turma')}><FiDatabase/> Cadastro Turma</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/trabalhos-avaliativos')}><FiDatabase/> Trabalhos Avaliativos</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/cadastro-nota')}><FiCalendar/> Cadastro Notas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/usuarios')}><FiUser/> Usuários</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-notas')}><FiFile/> Relatório Notas</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-alunos')}><FiFile/> Relatório Alunos</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/relatorio-trabalhos')}><FiFile/> Relatório Trabalhos</button></li>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '10px 0' }}></div>
          
          <li><button className="button-sidebar" onClick={()=>navigate('/sobre')}><FiInfo/> Sobre</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/contato')}><FiPhone/> Contato</button></li>
          <li><button className="button-sidebar" onClick={()=>navigate('/login')}><FiUser/> Sair (Login)</button></li>
        </ul>
      </aside>
    </>
  )
}