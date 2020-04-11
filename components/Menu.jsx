import React from 'react';
import classnames from 'classnames';
import ActiveLink from './ActiveLink';

export default class Menu extends React.Component {
  render () {
    const { open } = this.props;
    return <div className={classnames('Menu', {'Menu--open' : open})}>
      <div className="Menu__black"></div>
      <div className="Menu__pane">
        <nav>
          <ul>
            <li><ActiveLink className="Menu__item" href="/">Portfolio</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/work">My Work</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/skills">My Skills</ActiveLink></li>
            <li><ActiveLink className="Menu__item" href="/about">About me</ActiveLink></li>
            <br/>
            <li><ActiveLink className="Menu__item Menu__item--disabled" href="/blog">Blog<span className="soon-badge">Soon</span></ActiveLink></li>
          </ul>
        </nav>
      </div>
    </div> 
  }
}