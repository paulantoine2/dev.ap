import TypedTitle from '../components/TypedTitle';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import Fade from 'react-reveal/Fade'
import ContactBlock from '../components/ContactBlock';

export default class Index extends React.Component {

  render() {
    return (
      <Layout title={'Developer'}>
        <Fade delay={50}>
          <section className="Home__hero">
            <h1 className="typography__headline">
              <TypedTitle strings={[
                'Web development, made with love.',
                'Web development, made with passion.'
              ]} />
            </h1>
            <p className="typography__subhead">Front end. Javascript. Motion design integration.</p>
            <Button href="/work">See all my work</Button>
          </section>
          <section className="Home__portfolio">
            <Fade bottom>
              <div className="cards-wrapper">
                <Card href={'/work/'} img={{ url: '/pdb.png', alt: 'PDB Website' }} title={'E-commerce'} sub_title={'La plateforme du bâtiment'} />
                <Card href={'/work/'} img={{ url: '/emn.png', alt: 'EM Normandie Website' }} title={'CMS Websites'} sub_title={'EM Normandie'} />
                <Card href={'/work/'} img={{ url: '/red.png', alt: 'Redspher Portal app' }} title={'Mobile apps'} sub_title={'Redspher Portal'} />
              </div>
            </Fade>
          </section>
          <section className="Home__clients">
            <h2 className="typography__eyebrow">Clients</h2>
            <h2 className="typography__headline">I work for</h2>
            <p className="typography__subhead">Become one of them</p>
            <Button href="/about">Contact me</Button>
            <div className="Home__clients__container" id="clients-carousel">
              <div className="bg--lighten">
                <img src="/client_red.png" alt="Redspher Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_sg.png" alt="Saint-Gobain Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_ensam.png" alt="Ensam Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_vh.png" alt="Valentin Hauy Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_cdc.png" alt="Cours des comptes Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_red.png" alt="Redspher Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_sg.png" alt="Saint-Gobain Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_ensam.png" alt="Ensam Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_vh.png" alt="Valentin Hauy Logo" />
              </div>
              <div className="bg--lighten">
                <img src="/client_cdc.png" alt="Cours des comptes Logo" />
              </div>
            </div>
          </section>
          <section className="Home__about">
            <h2 className="typography__eyebrow">About</h2>
            <h2 className="typography__headline">Get to know me</h2>
            <p className="typography__subhead">How can I be useful to you ?</p>
            <div className="row">
              <Card href={'/about'} img={{ url: '/contact@2x.png', alt: 'Coffee' }} title={'About me'} />
              <Card href={'/skills'} img={{ url: '/skills@2x.png', alt: 'Developer and computer' }} title={'My skills'} />
            </div>
          </section>
          <ContactBlock />
        </Fade>
      </Layout>
    );
  }
}