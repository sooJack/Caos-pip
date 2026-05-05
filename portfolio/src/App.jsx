import { useState } from 'react'
import './style.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function App() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensagem enviada com sucesso 🚀')
    setFormData({ nome: '', email: '', mensagem: '' })
  }

  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="profile">
          <div className="avatar">
            <img src="/avatar.jpg" alt="Jackson Oliveira" />
          </div>
          <h2>Jackson Oliveira</h2>
          <p>Desenvolvedor de Software</p>
        </div>

        <nav>
          <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('#sobre') }}>Sobre</a>
          <a href="#experiencia" onClick={(e) => { e.preventDefault(); scrollToSection('#experiencia') }}>Experiência</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('#skills') }}>Skills</a>
          <a href="#projetos" onClick={(e) => { e.preventDefault(); scrollToSection('#projetos') }}>Projetos</a>
          <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('#contato') }}>Contato</a>
        </nav>

        <div className="social">
          <a href="https://linkedin.com/in/jackson-oliveira" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/sooJack" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:pegaojack16@gmail.com"><SiGmail /></a>
        </div>
      </aside>
      <main className="content">

        {/* sobre */}
        <section id="sobre" className="section">
          <h1>Sobre</h1>
          <p>
            Sou desenvolvedor de software com perfil proativo e adaptável,
            com facilidade em aprender rapidamente novas tecnologias.
            Busco constantemente evoluir profissionalmente e contribuir para o crescimento da empresa, propondo melhorias e soluções eficientes.
            Tenho foco em resultados, trabalho em equipe e no desenvolvimento contínuo, sempre alinhado às necessidades do negócio.
          </p>

        </section>
        {/* experience */}
        <section id="experiencia" className="section">
          <h1>Experiência</h1>
          <div className="timeline">
            <div className="item">
              <div className="dot"></div>
              <div className="info">
                <h3>Sydney Studios</h3>
                <span>2022 - Atual</span>
                <p>Arquitetura de sistemas e desenvolvimento full stack.</p>
              </div>
            </div>

            <div className="item">
              <div className="dot"></div>
              <div className="info">
                <h3>Google</h3>
                <span>2020 - 2022</span>
                <p>Frontend e experiência do usuário.</p>
              </div>
            </div>
          </div>

        </section>
        {/* skills */}
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
        {/* projects */}
        <section id="projetos" className="section">
          <h1>Projetos</h1>
          <div className="projects">
            <div className="project">
              <h3>BlackOut</h3>
              <p>
                Sistema moderno e eficiente programado para um site de jogos, com foco em esclarecer as necessidades dos usuários,
                as funcionalidades e a experiência de varios usuários, para criar um sistema de classificação de jogos que seja fácil de usar.
              </p>
            </div>
            <div className="project">
              <h3>Projeto RPG</h3>
              <p>
                Criação de sites diversos para RPGs, tudo responsivo, aderindo a modernidade e funcionalidades simples, adições constantes e novas.
              </p>
            </div>
          </div>

        </section>
        {/* contato */}
        <section id="contato" className="section">
          <h1>Contato</h1>
          <form id="formContato" onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <textarea name="mensagem" placeholder="Mensagem" value={formData.mensagem} onChange={handleInputChange}></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
