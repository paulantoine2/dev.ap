import TypedTitle from '../components/TypedTitle';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import Fade from 'react-reveal/Fade'
import ContactBlock from '../components/ContactBlock';
import { NextSeo } from 'next-seo';

export default class Index extends React.Component {

  render() {
    return (
      <Layout>
        <NextSeo
          title="Paul Antoine | About"
          description="Front-end developer producing high quality web and mobile apps with outstanding user experience and beautiful designs."
          canonical="https://dev-ap.netlify.appabout"
          openGraph={{
            url: 'https://dev-ap.netlify.appabout',
            title: '👨🏻‍💻 Paul Antoine | About',
            description: 'Front-end developer producing high quality web and mobile apps with outstanding user experience and beautiful designs.',
            images: [
              {
                url: 'https://dev-ap.netlify.appog_img.png',
                width: 1200,
                height: 630,
                alt: 'Paul Antoine website preview',
              }
            ],
            site_name: 'Paul Antoine',
          }}
        />
        <Fade delay={50}>
          <section className="About About__wrapper">
            <img className="SideImg" src="profile.jpeg" alt="Paul profile picture" />
            <div>
              <h1 className="typography__headline">About</h1>
              <p className="typography__subhead">Get to know me</p>
              <div className="typography__body__elevated">
                <p>Hi, I'm Paul Antoine ! (Paul's my first name 😉)</p>
                <p>Developper by training and passionate photographer, I self-taught modern front-end technologies to pursue a speciality in the direction.</p>
                <p>After 3 years as Full-stack web developper in a Digital Agency, half of it as Lead Developper, I became a full-time freelance.</p>
                <p>Nowadays, I'm mostly interested about the startup universe, to build products and services I believe in and where I find my values. Don't hesitate to contact me if you have a project !</p>
                <p>🌍 I work remotly and am not based anywhere.</p>
                <br/>
              </div>
              <Button href={'/skills'} title={'My skills'}>How can I be useful ?</Button>
            </div>
          </section>
          <ContactBlock />
        </Fade>
      </Layout>
    );
  }
}