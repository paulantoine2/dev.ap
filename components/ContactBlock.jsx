import Button from '../components/Button';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

export default function ContactBlock() {
  return <section className="Contact">
    <div className="Contact__container">
      <h2 className="typography__eyebrow">Contact</h2>
      <p className="typography__headline">Let's grab a coffee</p>
      <p className="typography__subhead">For business inquiries, please contact me by email or LinkedIn</p>
      <div className="Contact__buttons">
        <Button href="mailto:paul.antoine2@gmail.com" title="Send an email to Paul">paul.antoine2@gmail.com</Button>
        <Button href="https://www.linkedin.com/in/paul-antoine-183707121/" title="My Linkedin profile"><FaLinkedin />Message</Button>
      </div>
    </div>
  </section>
}