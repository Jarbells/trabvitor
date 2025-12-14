# Gestão Escolar Digital - Frontend

> Trabalho Final da disciplina de Desenvolvimento de Software para Web (UFC - Quixadá)
> **Entrega 2: Protótipo Funcional do Frontend**

## 1. Integrantes da Dupla

| Matrícula | Nome | E-mail |
|-----------|------|--------|
| [Matrícula 1] | Antônia Graziely Nobre Moreira | [email1]@alu.ufc.br |
| [Matrícula 2] | Francisco Jarbas dos Santos Sousa | [email2]@alu.ufc.br |

## 2. Sobre o Projeto

O **Gestão Escolar Digital** é uma plataforma web responsiva desenvolvida para modernizar o controle pedagógico de escolas. O sistema permite o gerenciamento centralizado de alunos, professores, turmas e notas, substituindo processos manuais por uma interface intuitiva e eficiente.

## 3. Estrutura e Tecnologias

O projeto foi estruturado utilizando as tecnologias mais modernas do ecossistema React:

* **Framework:** React + Vite
* **Linguagem:** JavaScript (ES6+)
* **Roteamento:** React Router Dom (v6)
* **Estilização:** CSS3 Moderno (Grid, Flexbox, Variables, Animations)
* **Ícones:** React Icons (Feather Icons)

## 4. Rotas Implementadas

As principais telas solicitadas na entrega foram implementadas e estão acessíveis através do menu lateral:

* **/login** - Tela de Acesso ao Sistema (Login)
* **/dashboard** - Visão Geral com Métricas e Gráficos (Tela Inicial)
* **/relatorio-alunos** - Listagem de Alunos com Busca e Filtros (Feed)
* **/aluno/:id** - Tela de Detalhes da Entidade (Ficha do Aluno)
* **/cadastro-aluno** - Formulário com Validação e Máscaras

## 5. Funcionalidades da Entrega 2

### Telas Estáticas e Dinâmicas
Implementamos um layout responsivo completo com **Sidebar Retrátil** e **Menu Hambúrguer** para mobile. O design adapta-se automaticamente a diferentes tamanhos de tela.

### Services Mockados
Como ainda não há Backend, criamos uma camada de serviço simulada (`src/services/mockData.js`) que fornece dados fictícios de alunos para popular as tabelas e fichas de detalhe, simulando uma API real.

### Formulários com Validação
O cadastro de alunos conta com máscaras de entrada (Input Mask) para campos como CPF e Telefone, além de validação de campos obrigatórios HTML5.

### Componentes Reutilizáveis
Para manter a consistência e agilidade, criamos componentes modulares:
* `MainLayout`: Gerencia a estrutura da página (Sidebar + Header + Content).
* `Sidebar`: Navegação responsiva com animação.
* `MetricCard`: Cartões de estatística do Dashboard.
* `Input/Select`: Campos de formulário padronizados.

## 6. Telas do Sistema (Prints)

### Dashboard (Área do Usuário)
> Visão geral com métricas, gráficos css e atividades recentes.
![Tela de Dashboard](assets/dashboard.png)

### Listagem de Alunos (Feed)
> Tabela com dados mockados, status colorido e barra de pesquisa funcional.
![Tela de Listagem](assets/lista.png)

### Detalhes do Aluno
> Ficha completa acessada ao clicar no ícone de "olho" na listagem.
![Tela de Detalhes](assets/detalhe.png)

### Tela de Login
> Tela inicial de acesso com design limpo.
![Tela de Login](assets/login.png)
---

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/GrazielyNobre99/web-2025-2--Gestao-Escolar-Digital---Graziely---Jarbas--frontend.git](https://github.com/GrazielyNobre99/web-2025-2--Gestao-Escolar-Digital---Graziely---Jarbas--frontend.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor local:**
    ```bash
    npm run dev
    ```
4.  **Acesse no navegador:**
    http://localhost:5173/