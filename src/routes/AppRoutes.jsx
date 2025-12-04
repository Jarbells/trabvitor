import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import CadastroAluno from '../pages/CadastroAluno/CadastroAluno'
import Sobre from "../pages/Nav/Sobre"
import Inicio from "../pages/Nav/Inicio"
import Contato from "../pages/Nav/Contato"

export default function AppRoutes(){
  return (
    <Routes>

      {/* Layout principal */}
      <Route path="/" element={<MainLayout />}>

        {/* Redireciona / para /cadastro-aluno */}
        <Route index element={<Navigate to="/cadastro-aluno" replace />} />

        <Route path="cadastro-aluno" element={<CadastroAluno />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="contato" element={<Contato />} />

        {/* 404 relacionado ao layout */}
        <Route path="*" element={<div style={{ padding: 20 }}>Página não encontrada</div>} />
      </Route>

    </Routes>
  )
}
