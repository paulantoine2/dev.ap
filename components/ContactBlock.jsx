import Button from '../components/Button';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';

export default function ContactBlock() {
  return <section className="Contact">
    <div className="Contact__container">
      <h2 className="typography__eyebrow">Contact</h2>
      <p className="typography__headline">Let's grab a coffee</p>
      <p className="typography__subhead">For business inquiries, please contact me by email or LinkedIn</p>
      <div className="Contact__buttons">
        <Button>paul.antoine2@gmail.com</Button>
        <Button><FaLinkedin />Message</Button>
      </div>
    </div>
  </section>
}