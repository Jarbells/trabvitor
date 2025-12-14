import React, { useState, useEffect } from 'react'
import { listaAlunos } from '../../services/mockData' // importamos os dados que eu tinha esquecido
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiEye, FiEdit, FiTrash2 } from 'react-icons/fi'
import './RelatorioAlunos.css'

export default function RelatorioAlunos() {
  const navigate = useNavigate()
  const [alunos, setAlunos] = useState([])
  const [busca, setBusca] = useState('')

  // simula o carregamento de dados da API
  useEffect(() => {
    setAlunos(listaAlunos)
  }, [])

  // filtra os alunos quando a gente digita a busca
  const alunosFiltrados = alunos.filter(aluno => 
    aluno.nome.toLowerCase().includes(busca.toLowerCase()) ||
    aluno.curso.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className="relatorio-container">
      <header className="page-header">
        <h2>Relatório de Alunos</h2>
        <button className="btn-novo" onClick={() => navigate('/cadastro-aluno')}>
          + Novo Aluno
        </button>
      </header>

      {/* barra pra buscar */}
      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Buscar por nome ou curso..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* tabelinha de listagem */}
      <div className="tabela-card">
        <table className="tabela-alunos">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunosFiltrados.length > 0 ? (
              alunosFiltrados.map((aluno) => (
                <tr key={aluno.id}>
                  <td>{aluno.matricula}</td>
                  <td>
                    <div className="aluno-info">
                      <span className="aluno-nome">{aluno.nome}</span>
                      <span className="aluno-email">{aluno.email}</span>
                    </div>
                  </td>
                  <td>{aluno.curso}</td>
                  <td>
                    <span className={`status-badge ${aluno.status.toLowerCase()}`}>
                      {aluno.status}
                    </span>
                  </td>
                  <td className="acoes">
                    <button title="Ver Detalhes" className="btn-icon ver" onClick={() => navigate(`/aluno/${aluno.id}`)}>
                      <FiEye />
                    </button>
                    <button title="Editar" className="btn-icon editar">
                      <FiEdit />
                    </button>
                    <button title="Excluir" className="btn-icon excluir">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="sem-resultados">Nenhum aluno encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}