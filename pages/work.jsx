import Layout from '../components/Layout';
import Card from '../components/Card';
import Fade from 'react-reveal/Fade'
import ContactBlock from '../components/ContactBlock';
import { FaGithub, FaCss3, FaReact, FaSass, FaNodeJs, FaAngular, FaDrupal } from 'react-icons/fa';
import { DiJqueryLogo, DiJavascript1 } from 'react-icons/di';

export default class Work extends React.Component {
  render() {
    const sliderSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '120px',
      arrows: false
    };
    return (
      <Layout title={'Work'}>
        <Fade delay={50}>
          <section className="Work__title">
            <div className="typography__eyebrow">
              My Work
            </div>
            <h2 className="typography__headline">Projects for clients</h2>
            <p className="typography__subhead">Explore what i've been working on</p>
          </section>
          <section className="Work__container">
            <Fade delay={50}>
              <div className="Work__card">
                <img className="Work__card__img" src="/hauy.png" alt="Valentin Hauy, Noel solidaire" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Landing page</h2>
                  <h2 className="typography__subhead">Valentin Hauy</h2>
                  <div className="typography__body">
                    <p>Création d'une landing page from scratch pour la récolte de dons d'une association.</p>
                    <p><FaCss3 /> <strong>CSS</strong></p>
                    <p><DiJqueryLogo /> <strong>jQuery</strong></p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img className="Work__card__img" src="/red.png" alt="Redspher Portal" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Mobile app</h2>
                  <h2 className="typography__subhead">Redspher Portal</h2>
                  <div className="typography__body">
                    <p>Developpement d'une application mobile de gestion de livraison pour un gestionnaire logistique.</p>
                    <p><FaReact /> <strong>React Native</strong></p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img className="Work__card__img" src="/ensam.png" alt="Arts et Métiers" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">Arts et Métiers</h2>
                  <div className="typography__body">
                    <p>Integration du theme d'un site web d'université developpé avec le CMS Drupal 8.</p>
                    <p><FaSass /> <strong>Sass</strong></p>
                    <p><DiJqueryLogo /> <strong>jQuery</strong></p>
                    <p><DiJavascript1 /> <strong>Native JS</strong></p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img className="Work__card__img" src="/pdb.png" alt="La plateforme du bâtiment" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Ecommerce</h2>
                  <h2 className="typography__subhead">La plateforme du bâtiment</h2>
                  <div className="typography__body">
                    <p>Refonte d'un site Ecommerce et developpement d'un lot d'applications web pour la gestion des commandes et des clients.</p>
                    <p><FaNodeJs /> <strong>NodeJS</strong></p>
                    <p><FaAngular /> <strong>AngularJS</strong></p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img className="Work__card__img" src="/asn.png" alt="Conservatoire d'Asnières" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">Conservatoire d'Asnières</h2>
                  <div className="typography__body">
                    <p>Developpement complet d'un site de conservatoire pour presenter l'etablissement et publier des articles et evenements.</p>
                    <p><FaSass /> <strong>Sass</strong></p>
                    <p><FaDrupal /> <strong>Drupal 8</strong></p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img className="Work__card__img" src="/eiff.png" alt="Noelle Eiferman" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">Noelle Eiferman</h2>
                  <div className="typography__body">
                    <p>Developpement complet d'un Portfolio d'artiste peintre présentant ses oeuvres.</p>
                    <p><FaSass /> <strong>Sass</strong></p>
                    <p><FaDrupal /> <strong>Drupal 8</strong></p>
                    <p><DiJavascript1 /> <strong>Native JS</strong></p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img className="Work__card__img" src="/emn.png" alt="EMN" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">EM Normandie</h2>
                  <div className="typography__body">
                    <p>Integration du theme d'un site web d'université developpé avec le CMS Drupal 8.</p>
                    <p><FaSass /> <strong>Sass</strong></p>
                    <p><DiJqueryLogo /> <strong>jQuery</strong></p>
                    <p><DiJavascript1 /> <strong>Native JS</strong></p>
                  </div>
                </div>
              </div>
            </Fade>
          </section>
          <section className="Work__title">
            <div className="typography__eyebrow">
              My Work
            </div>
            <h2 className="typography__headline">Personal projects</h2>
            <p className="typography__subhead">Experiments for self improvement</p>
          </section>
          <section className="Work__container Work__container__perso">
            <Fade delay={50}>
              <Card href={'https://paulantoine2.github.io/preview/'} img={{ url: '/preview.png', alt: 'Instagram preview website' }} title={'Instagram Preview'} color={'#FFD800'} />
              <Card href={'https://paulantoine2.github.io/2048/'} img={{ url: '/2048.png', alt: '2048 Game Website' }} title={'2048 Game'} color={'#FF4500'} />
              <Card href={'https://paulantoine2.github.io/demineur/'} img={{ url: '/demin.png', alt: 'Minesweeper game Website' }} title={'Minesweeper'} color={'#FFA500'} />
            </Fade>
          </section>
          <ContactBlock />
        </Fade>
      </Layout>
    );
  }
}