import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import CadastroAluno from '../pages/CadastroAluno/CadastroAluno'
import Sobre from "../pages/Nav/Sobre"
import Inicio from "../pages/Nav/Inicio"
import Contato from "../pages/Nav/Contato"
import Login from "../pages/Login/Login";
import CadastroProfessores from "../pages/CadastroProfessores/CadastroProfessores"
import CadastroDisciplina from '../pages/CadastroDisciplina/CadastroDisciplina'
import CadastroPeriodoLetivo from '../pages/CadastroPeriodoLetivo/CadastroPeriodoLetivo'
import RelatorioAlunos from '../pages/Relatorios/RelatorioAlunos'
import DetalheAluno from '../pages/DetalheAluno/DetalheAluno'

export default function AppRoutes(){
  return (
    <Routes>

      {/* Layout principal */}
      <Route path="/" element={<MainLayout />}>

        {/* Redireciona / para /cadastro-aluno */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="sobre" element={<Sobre />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="contato" element={<Contato />} />
        <Route path="cadastro-aluno" element={<CadastroAluno />} />
        <Route path="cadastro-professores" element={<CadastroProfessores />} />
        <Route path="cadastro-periodo-letivo" element={<CadastroPeriodoLetivo />} />
        <Route path="cadastro-disciplina" element={<CadastroDisciplina />} />
        <Route path="/login" element={<Login />} />
        <Route path="relatorio-alunos" element={<RelatorioAlunos />} />
        <Route path="aluno/:id" element={<DetalheAluno />} />


        {/* 404 relacionado ao layout */}
        <Route path="*" element={<div style={{ padding: 20 }}>Página não encontrada</div>} />
      </Route>

    </Routes>
  )
}
