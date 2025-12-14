import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUsers, FiBookOpen, FiAlertCircle, FiCheckSquare, FiTrendingUp } from 'react-icons/fi'
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()

  // dados ficticios para o dashboard
  const metrics = [
    { id: 1, title: 'Total de Alunos', value: '1,250', icon: <FiUsers />, color: 'blue', link: '/relatorio-alunos' },
    { id: 2, title: 'Professores Ativos', value: '48', icon: <FiBookOpen />, color: 'green', link: '/cadastro-professores' },
    { id: 3, title: 'Turmas em Andamento', value: '32', icon: <FiCheckSquare />, color: 'purple', link: '/cadastro-turma' },
    { id: 4, title: 'Alertas Pendentes', value: '5', icon: <FiAlertCircle />, color: 'red', link: '/alertas' },
  ]

  const atividadesRecentes = [
    { id: 1, usuario: 'Carlos Silva', acao: 'Lançou notas da Turma 3B', tempo: 'Há 10 min' },
    { id: 2, usuario: 'Ana Souza', acao: 'Cadastrou novo aluno: João Pedro', tempo: 'Há 35 min' },
    { id: 3, usuario: 'Sistema', acao: 'Backup automático realizado', tempo: 'Há 1 hora' },
    { id: 4, usuario: 'Roberto Lima', acao: 'Alterou o cronograma de provas', tempo: 'Há 2 horas' },
  ]

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <h2>Painel de Controle</h2>
          <p>Bem-vindo ao Sistema de Gestão Escolar</p>
        </div>
        <span className="data-atual">{new Date().toLocaleDateString('pt-BR')}</span>
      </header>

      {/* cartoes de metricas */}
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <div key={metric.id} className={`metric-card ${metric.color}`} onClick={() => navigate(metric.link)}>
            <div className="metric-info">
              <h3>{metric.value}</h3>
              <p>{metric.title}</p>
            </div>
            <div className="metric-icon">
              {metric.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content">
        {/* gráfico simulado somente o visual */}
        <div className="card-section chart-section">
          <div className="card-header">
            <h3><FiTrendingUp /> Desempenho Geral</h3>
          </div>
          <div className="chart-placeholder">
            <div className="bar" style={{height: '60%'}} title="Jan"></div>
            <div className="bar" style={{height: '80%'}} title="Fev"></div>
            <div className="bar" style={{height: '45%'}} title="Mar"></div>
            <div className="bar" style={{height: '90%'}} title="Abr"></div>
            <div className="bar" style={{height: '75%'}} title="Mai"></div>
            <div className="bar" style={{height: '50%'}} title="Jun"></div>
          </div>
          <p className="chart-legend">Média de notas por mês</p>
        </div>

        {/* atividades recentes */}
        <div className="card-section activities-section">
          <div className="card-header">
            <h3>Atividades Recentes</h3>
            <button className="btn-ver-todos">Ver tudo</button>
          </div>
          <ul className="activity-list">
            {atividadesRecentes.map((item) => (
              <li key={item.id} className="activity-item">
                <div className="activity-avatar">{item.usuario.charAt(0)}</div>
                <div className="activity-details">
                  <span className="activity-user">{item.usuario}</span>
                  <span className="activity-action">{item.acao}</span>
                </div>
                <span className="activity-time">{item.tempo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}