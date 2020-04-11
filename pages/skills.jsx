import Layout from '../components/Layout';
import Fade from 'react-reveal/Fade'
import TagCloud from 'TagCloud';
import { FaSass, FaReact, FaJs, FaNodeJs, FaAngular, FaCss3, FaDrupal, FaVuejs, FaCube, FaNeuter, FaNeos, FaAdobe, FaSketch, FaGithub, FaInvision, FaPen, FaCubes, FaLink, FaApple } from 'react-icons/fa';
import { DiBootstrap, DiGrunt, DiGulp, DiJqueryLogo, DiMysql, DiRedis, DiDrupal, DiGit, DiJavascript, DiJavascript1, DiFirebase, DiHeroku, DiVisualstudio} from 'react-icons/di';
import { renderToString } from 'react-dom/server';
import Button from '../components/Button';
import ContactBlock from '../components/ContactBlock';


export default class Index extends React.Component {

  componentDidMount() {
    const container = '.tagcloud-container';

    const texts = [
      'Animation', 'Performance',
      'AngularJS', 'SVG', 'Next.js', 'ES6', 'Typescript',
      'React', 'NodeJS', 'Sass', 'UX', 'Design'
    ];
    const options = {
      radius: 200
    };

    TagCloud(container, texts, options);

    // const tagCloud = document.getElementsByClassName('tagcloud-container')[0];
    // window.addEventListener('scroll', (e) => {
    //   if (window.innerWidth > 900) {
    //     tagCloud.style.transform = `translateY(calc(${-400 - (window.scrollY * 0.5)}px)`;
    //   }
    // });
  }
  

  render() {
    return (
      <Layout title={'Skills'}>
        <Fade delay={50}>
          <section className="Skills">
            <div>
            <h1 className="typography__headline">
              My Skills
            </h1>
            <p className="typography__subhead">How can I be useful to you ?</p>
            <div className="Skills__text">
              <div className="typography__body__elevated">
                <p>I'm mainly focus on :</p>
                <br/>
                <p>🎛 Designing user friendly interfaces for an amazing experience</p>
                <p>⚡️  Developing fast and optimized pages and apps for a smooth navigation</p>
                <p>🤝 Working together with web designers to build beautiful websites</p>
                <p>💡 Engineering the front-end side of new features</p>
                <br/>
                <br/>
                <p>With all the technologies going on these day, we must make a list, so here we go.</p>
                <br/>
              </div>
              <h3 className="typography__eyebrow">Prefered technologies :</h3>
              <div className="typography__body__elevated">
                <br/>
                <p><FaReact /> <strong>React</strong> - JavaScript UI Library</p>
                <p><FaNeos /> <strong>Next.JS</strong> - React Framework for web app</p>
                <p><FaAngular /> <strong>AngularJS</strong> - JavaScript MVM Framework</p>
                <p><FaNodeJs /> <strong>Node JS</strong> - JavaScript Runtime</p>
                <p><FaSass /> <strong>SASS</strong> - CSS Extension language</p>
                <p><DiGit /> <strong>Git</strong> - Versionning system</p>
                <br/>
              </div>
              <h3 className="typography__eyebrow">I also use :</h3>
              <div className="typography__body__elevated">
                <br/>
                <p><FaVuejs /> <strong>VueJS</strong> - JavaScript front-end framework</p>
                <p><FaAngular /> <strong>Angular 2+</strong> - JavaScript front-end framework</p>
                <p><FaReact /> <strong>React Native</strong> - React framework for mobile apps</p>
                <p><DiBootstrap /> <strong>Bootstrap</strong> - CSS Library</p>
                <p><DiGrunt /> <strong>Grunt</strong> - Task runner</p>
                <p><DiGulp /> <strong>Gulp</strong> - Task runner</p>
                <p><FaCubes /> <strong>Webpack</strong> - Module bundler</p>
                <p><DiJqueryLogo /> <strong>jQuery</strong> - JavaScript library</p>
                <p><DiMysql /> <strong>MySQL</strong> - Database language</p>
                <p><DiRedis /> <strong>Redis</strong> - Data storage</p>
                <p><DiDrupal /> <strong>Drupal 8</strong> - Content managment system</p>
                <p><DiJavascript1 /> <strong>Typescript</strong> - JavaScript extension language</p>
                <p><DiFirebase /> <strong>Firebase</strong> - Application development platform</p>
                <p><DiHeroku /> <strong>Heroku</strong> - Cloud application platform</p>
                <br/>
              </div>
              <h3 className="typography__eyebrow">Tools :</h3>
              <div className="typography__body__elevated">
                <br/>
                <p><FaAdobe /> <strong>Adobe XD</strong> - UI/UX Design software</p>
                <p><FaSketch /> <strong>Sketch</strong> - UI/UX Design software</p>
                <p><FaInvision /> <strong>inVision</strong> - Product design platform</p>
                <p><FaGithub /> <strong>Github</strong> - Team development host</p>
                <p><FaPen /> <strong>DrawIo</strong> - Online diagram software</p>
                <p><FaLink /> <strong>Postman</strong> - Request builder</p>
                <br/>
                <p>I work on <FaApple /> <strong>macOS</strong> with <DiVisualstudio /> <strong>Visual Studio Code</strong></p>
              </div>
            </div>
            </div>
            
            <div className="tagcloud-container"></div>
          </section>
          <ContactBlock />
        </Fade>
      </Layout>
    );
  }
}