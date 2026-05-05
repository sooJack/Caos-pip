import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';
import './Social.css';

export default function Social() {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/jackson-oliveira" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://github.com/jacksonoliveira" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FaGithub />
      </a>
      <a href="mailto:jackson@email.com" title="Email">
        <FaEnvelope />
      </a>
    </div>
  );
}
