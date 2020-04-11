import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { FaPlane } from 'react-icons/fa';

export default class Card extends React.Component {
  render() {
    if (this.props.href) return <a href={this.props.href} title={this.props.title} className={classnames('Card', this.props.className)} style={{backgroundColor: this.props.color}}>
        <img src={this.props.img.url} alt={this.props.img.alt} />
        <div className="Card__title">
          <h3 className="typography__headline">
            {this.props.title}
          </h3>
          <p className="typography__body__elevated">{this.props.sub_title}</p>
        </div>
      </a>

    return <div className={classnames('Card', this.props.className)} style={{backgroundColor: this.props.color}}>
      <img src={this.props.img.url} alt={this.props.img.alt} />
      <div className="Card__title">
        <h3 className="typography__headline">
          {this.props.title}
        </h3>
        <p className="typography__body__elevated">{this.props.sub_title}</p>
      </div>
      <div className="Card__text typography__body">
        <p>{this.props.text}</p>
      </div>
    </div>
  }
}