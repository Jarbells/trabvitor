import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { listaAlunos } from '../../services/mockData' // uso o mesmo "banco"
import { FiArrowLeft, FiUser, FiMail, FiBook, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import './DetalheAluno.css'

export default function DetalheAluno() {
    const { id } = useParams() // pega o id da url
    const navigate = useNavigate()
    const [aluno, setAluno] = useState(null)

    useEffect(() => {
        // busca o aluno no nosso "banco de dados" falso
        const alunoEncontrado = listaAlunos.find(a => a.id === parseInt(id))
        setAluno(alunoEncontrado)
    }, [id])

    if (!aluno) return <div className="carregando">Carregando dados do aluno...</div>

    return (
        <div className="detalhe-container">
            <button className="btn-voltar" onClick={() => navigate('/relatorio-alunos')}>
                <FiArrowLeft /> Voltar para Lista
            </button>

            <div className="ficha-aluno">
                <header className="ficha-header">
                    <div className="avatar-placeholder">
                        {aluno.nome.charAt(0)}
                    </div>
                    <div className="header-info">
                        <h2>{aluno.nome}</h2>
                        <span className="matricula">Matrícula: {aluno.matricula}</span>
                    </div>
                    <span className={`status-tag ${aluno.status.toLowerCase()}`}>
                        {aluno.status}
                    </span>
                </header>

                <div className="ficha-body">
                    <div className="info-item">
                        <FiMail className="icone" />
                        <div>
                            <label>Email Institucional</label>
                            <p>{aluno.email}</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiBook className="icone" />
                        <div>
                            <label>Curso</label>
                            <p>{aluno.curso}</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <FiCheckCircle className="icone" />
                        <div>
                            <label>Turma Atual</label>
                            <p>{aluno.turma || 'Não enturmado'}</p>
                        </div>
                    </div>
                </div>

                <footer className="ficha-footer">
                    <button
                        className="btn-editar"
                        onClick={() => alert('Funcionalidade de Edição será implementada na próxima etapa!')}
                    >
                        Editar Cadastro
                    </button>
                    <button
                        className="btn-historico"
                        onClick={() => alert('O Histórico Escolar será implementado na próxima etapa!')}
                    >
                        Ver Histórico Escolar
                    </button>
                </footer>
            </div>
        </div>
    )
}