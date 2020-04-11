import React, { Component } from 'react'
import Head from 'next/head';
import Menu from './Menu';
import Fonts from '../helpers/Fonts';
import { MdClose, MdMenu } from 'react-icons/md';
import classnames from 'classnames';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import Button from './Button';

export default class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menuOpen: false
    }
  }
  componentDidMount() {
    Fonts();
  }
  
  toggleMenu() {
    this.setState(state => ({ ...state, menuOpen: !state.menuOpen }))
  }
  render() {
    const { menuOpen } = this.state;
    const { title } = this.props;
    return (
      <div>
        <Head>
          <title>Paul Antoine | { title }</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Developer producing high quality websites and apps with outstanding user experience." />
          <meta name="keywords" content="portfolio, web, developer, website, web developer, fullstack, programming, ux, webdesign, front-end, ui" />
          <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://dev.antoine-paul.com" />
          <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://dev.antoine-paul.com/fb_image.png" />
          <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Freelance front-end developer. Remote." />
          <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Paul Antoine - Developer" />
          <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="Paul Antoine - Developer" />
          <meta property="fb:app_id" content="271915029939800"></meta>
        </Head>
        <header>
          <a href="/" className="Logo__full">
            <img src='/logo.svg' alt="logo"/>
            <img src='/logo_border.svg' alt="logo" className="logo_border"/>
            <span>Paul ANTOINE</span>
          </a>
          <Button className={classnames('Menu__button', {'Menu__button--open': menuOpen})} onClick={() => this.toggleMenu()}>
            MENU { menuOpen ? <MdClose /> : <MdMenu />}
          </Button>
          {/* <button className={classnames('Menu__button', {'Menu__button--open': menuOpen})} onClick={() => this.toggleMenu()}>
            <span>MENU</span> { menuOpen ? <MdClose /> : <MdMenu />}
          </button> */}
          <Menu open={menuOpen} />
        </header>
        <main className="Main">
          { this.props.children }
        </main>
        <footer className="Footer">
          <a className="Footer__title upcase" href="antoine-paul.com"><img src='/logo.svg' alt="logo"/> ANTOINE-PAUL.COM</a>
          <div className="Footer__links">
            <a href="https://github.com/paulantoine2" title="Github"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/paul-antoine-183707121/" title="LinkedIn"><FaLinkedin /></a>
          </div>
          <div className="Footer__sub">
            Design and Development by Paul ANTOINE | © antoine-paul.com 2020 | Conditions
          </div>
        </footer>
        {/* <div className="Left__line"></div> */}
      </div>
    )
  }
}
