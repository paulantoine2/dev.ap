import React, { Component } from 'react'
import Head from 'next/head';
import Menu from './Menu';
import Fonts from '../helpers/Fonts';
import { MdClose, MdMenu } from 'react-icons/md';
import classnames from 'classnames';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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
    document.getElementById('main-container').style.visibility = 'visible';
  }

  toggleMenu() {
    this.setState(state => ({ ...state, menuOpen: !state.menuOpen }))
  }
  
  render() {
    const { menuOpen } = this.state;
    return (
      <div id="main-container" style={{visibility: 'hidden'}}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <meta property="og:url" content={`https://dev.antoine-paul.com`} />
          <meta property="og:image" content="https://dev-ap.netlify.appfb_image.png" />
          <meta property="og:image:alt" content="Antoine Paul website preview"/>
          <meta property="og:description" content="Front-end developer producing high quality web and mobile apps with outstanding user experience and beautiful designs." />
          <meta property="og:title" content={`${title} | Paul Antoine`} />
          <meta property="og:type" content="profile" /> */}
          <link rel="icon" type="image/ico" href="/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102252045-3"></script>
          <script dangerouslySetInnerHTML={{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-102252045-3'); `}}> 
          </script>
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
          <Menu open={menuOpen} />
        </header>
        <main className="Main">
          { this.props.children }
        </main>
        <footer className="Footer">
          <a className="Footer__title upcase" href="antoine-paul.com"><img src='/logo.svg' alt="logo"/> ANTOINE-PAUL.COM</a>
          <div className="Footer__links">
            <a href="https://github.com/paulantoine2" title="Github" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/paul-antoine-183707121/" title="LinkedIn" target="_blank"><FaLinkedin /></a>
          </div>
          <div className="Footer__sub">
            Design and Development by Paul ANTOINE with NextJS and Netlify | © antoine-paul.com 2020
          </div>
        </footer>
      </div>
    )
  }
}
