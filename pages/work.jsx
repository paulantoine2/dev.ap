import Layout from "../components/Layout";
import Card from "../components/Card";
import Fade from "react-reveal/Fade";
import ContactBlock from "../components/ContactBlock";
import {
  FaGithub,
  FaCss3,
  FaReact,
  FaSass,
  FaNodeJs,
  FaAngular,
  FaDrupal,
  FaDatabase,
} from "react-icons/fa";
import { DiJqueryLogo, DiJavascript1 } from "react-icons/di";
import { SiElectron, SiNextDotJs, SiTypescript } from "react-icons/si";
import { NextSeo } from "next-seo";

export default class Work extends React.Component {
  render() {
    return (
      <Layout>
        <NextSeo
          noindex={true}
          title="Paul Antoine | Work"
          description="Front-end developer producing high quality web and mobile apps with outstanding user experience and beautiful designs."
          canonical="https://dev-ap.netlify.appwork"
          openGraph={{
            url: "https://dev-ap.netlify.appwork",
            title: "👨🏻‍💻 Paul Antoine | Work",
            description:
              "Front-end developer producing high quality web and mobile apps with outstanding user experience and beautiful designs.",
            images: [
              {
                url: "https://dev-ap.netlify.appog_img.png",
                width: 1200,
                height: 630,
                alt: "Paul Antoine website preview",
              },
            ],
            site_name: "Paul Antoine",
          }}
        />
        <Fade delay={50}>
          <section className="Work__title">
            <div className="typography__eyebrow">My Work</div>
            <h2 className="typography__headline">Projects for clients</h2>
            <p className="typography__subhead">
              Explore what i've been working on
            </p>
          </section>
          <section className="Work__container">
            <Fade delay={50}>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/unipile.png"
                  alt="Unipile"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Productivity App</h2>
                  <h2 className="typography__subhead">Unipile</h2>
                  <div className="typography__body">
                    <p>
                      From architecture engineering to UX design, I've worked on
                      this productivity app with a small team.
                    </p>
                    <p>
                      <FaReact /> <strong>React</strong>
                    </p>
                    <p>
                      <SiTypescript /> <strong>Typescript</strong>
                    </p>
                    <p>
                      <SiElectron /> <strong>Electron</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/kitchu.png"
                  alt="Kitchu.co"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Food App</h2>
                  <h2 className="typography__subhead">Kitchu.co</h2>
                  <div className="typography__body">
                    <p>
                      Personal project, Smart shopping list to help people
                      finding products for their favorite recipes.
                    </p>
                    <p>
                      <SiNextDotJs /> <strong>NextJS</strong>
                    </p>
                    <p>
                      <SiTypescript /> <strong>Typescript</strong>
                    </p>
                    <p>
                      <FaDatabase /> <strong>Supabase</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/hauy.png"
                  alt="Valentin Hauy, Noel solidaire"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Landing page</h2>
                  <h2 className="typography__subhead">Valentin Hauy</h2>
                  <div className="typography__body">
                    <p>
                      Landing page made from scratch for a charitable
                      fundraising.
                    </p>
                    <p>
                      <FaCss3 /> <strong>CSS</strong>
                    </p>
                    <p>
                      <DiJqueryLogo /> <strong>jQuery</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/red.png"
                  alt="Redspher Portal"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Mobile app</h2>
                  <h2 className="typography__subhead">Redspher Portal</h2>
                  <div className="typography__body">
                    <p>
                      Mobile app development for delivery managment of a logitic
                      company.
                    </p>
                    <p>
                      <FaReact /> <strong>React Native</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/ensam.png"
                  alt="Arts et Métiers"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">Arts et Métiers</h2>
                  <div className="typography__body">
                    <p>
                      Theme integration of a university website made with Drupal
                      8 CMS.
                    </p>
                    <p>
                      <FaSass /> <strong>Sass</strong>
                    </p>
                    <p>
                      <DiJqueryLogo /> <strong>jQuery</strong>
                    </p>
                    <p>
                      <DiJavascript1 /> <strong>Native JS</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/pdb.png"
                  alt="La plateforme du bâtiment"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">Ecommerce</h2>
                  <h2 className="typography__subhead">
                    La plateforme du bâtiment
                  </h2>
                  <div className="typography__body">
                    <p>
                      E-commerce platform recast and development of a batch of
                      web applications for customer and order managment.
                    </p>
                    <p>
                      <FaNodeJs /> <strong>NodeJS</strong>
                    </p>
                    <p>
                      <FaAngular /> <strong>AngularJS</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/asn.png"
                  alt="Conservatoire d'Asnières"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">
                    Conservatoire d'Asnières
                  </h2>
                  <div className="typography__body">
                    <p>
                      Full stack development of a conservatory website
                      presenting articles and schedule.
                    </p>
                    <p>
                      <FaSass /> <strong>Sass</strong>
                    </p>
                    <p>
                      <FaDrupal /> <strong>Drupal 8</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img
                  className="Work__card__img"
                  src="/eiff.png"
                  alt="Noelle Eiferman"
                />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">Noelle Eiferman</h2>
                  <div className="typography__body">
                    <p>
                      Full stack development of a painter portfolio presenting
                      paints.
                    </p>
                    <p>
                      <FaSass /> <strong>Sass</strong>
                    </p>
                    <p>
                      <FaDrupal /> <strong>Drupal 8</strong>
                    </p>
                    <p>
                      <DiJavascript1 /> <strong>Native JS</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="Work__card">
                <img className="Work__card__img" src="/emn.png" alt="EMN" />
                <div className="Work__card__bottom">
                  <h2 className="typography__headline">CMS Website</h2>
                  <h2 className="typography__subhead">EM Normandie</h2>
                  <div className="typography__body">
                    <p>
                      Theme integration of a university website made with Drupal
                      8 CMS.
                    </p>
                    <p>
                      <FaSass /> <strong>Sass</strong>
                    </p>
                    <p>
                      <DiJqueryLogo /> <strong>jQuery</strong>
                    </p>
                    <p>
                      <DiJavascript1 /> <strong>Native JS</strong>
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </section>
          <section className="Work__title">
            <div className="typography__eyebrow">My Work</div>
            <h2 className="typography__headline">Personal projects</h2>
            <p className="typography__subhead">
              Experiments for self improvement
            </p>
          </section>
          <section className="Work__container Work__container__perso">
            <Fade delay={50}>
              <Card
                href={"https://paulantoine2.github.io/preview/"}
                img={{ url: "/preview.png", alt: "Instagram preview website" }}
                title={"Instagram Preview"}
                color={"#FFD800"}
              />
              <Card
                href={"https://paulantoine2.github.io/2048/"}
                img={{ url: "/2048.png", alt: "2048 Game Website" }}
                title={"2048 Game"}
                color={"#FF4500"}
              />
              <Card
                href={"https://paulantoine2.github.io/demineur/"}
                img={{ url: "/demin.png", alt: "Minesweeper game Website" }}
                title={"Minesweeper"}
                color={"#FFA500"}
              />
            </Fade>
          </section>
          <ContactBlock />
        </Fade>
      </Layout>
    );
  }
}
