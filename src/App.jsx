import { useState } from 'react'
import './style.css'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso 🚀')

    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/272515403?v=4"
              alt="Jackson Oliveira"
            />
          </div>
          <h2>Jackson Oliveira</h2>
          <p>Desenvolvedor de Software</p>
        </div>

        <nav>
          <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre') }}>
            Sobre
          </a>
          <a href="#experiencia" onClick={(e) => { e.preventDefault(); scrollToSection('experiencia') }}>
            Experiência
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>
            Skills
          </a>
          <a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('projetos') }}>
            Projetos
          </a>
          <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}>
            Contato
          </a>
        </nav>

        <div className="social">
          <a href="https://linkedin.com/in/jackson-oliveira" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sooJack" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:pegaojack16@gmail.com">
            <SiGmail />
          </a>
        </div>
      </aside>

      <main className="content">
        <section id="sobre" className="section">
          <h1>Sobre</h1>
          <p>
            Sou desenvolvedor de software com perfil proativo e adaptável,
            com facilidade em aprender rapidamente novas tecnologias.
          </p>
        </section>

        <section id="experiencia" className="section">
          <h1>Experiência</h1>

          <div className="timeline">
            <div className="item">
              <div className="dot"></div>
              <div className="info">
                <h3>AEC</h3>
                <span>- 2025 -</span>
                <p>Atendimento ao cliente elaborado e vendas de produtos.</p>
              </div>
            </div>

            <div className="item">
              <div className="dot"></div>
              <div className="info">
                <h3>Freelancer</h3>
                <span>2026 - Atual</span>
                <p>Frontend e Backend. experiências dos usuários.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h1>Skills</h1>

          <div className="skills-grid">
            <div className="skill">
              <span>JavaScript</span>
              <div className="bar"><div style={{ width: '90%' }}></div></div>
            </div>

            <div className="skill">
              <span>Python</span>
              <div className="bar"><div style={{ width: '85%' }}></div></div>
            </div>

            <div className="skill">
              <span>CSS</span>
              <div className="bar"><div style={{ width: '80%' }}></div></div>
            </div>
          </div>
        </section>

        <section id="projetos" className="section">
          <h1>Projetos</h1>

          <div className="projects">
            <div className="project">
              <h3>BlackOut</h3>
              <p>Sistema de jogos com foco em experiência do usuário.</p>
            </div>

            <div className="project">
              <h3>Projeto RPG</h3>
              <p>Sites responsivos para RPGs com funcionalidades simples.</p>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <h1>Contato</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <textarea
              name="mensagem"
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
            />

            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
