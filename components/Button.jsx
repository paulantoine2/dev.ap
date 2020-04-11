import classnames from 'classnames';
import Link from 'next/link';

export default function Button (props) {
  const button = <button id={props.id}
      className={classnames('Button', props.className, props.type ? 'Button--' + props.type : '')}
      onClick={props.onClick}> 
    {props.children}
    <div className="halo"></div>
    </button>
  if (props.href && props.href.startsWith('/')) {
    return <Link href={props.href}>{button}</Link>
  } else if (props.href) {
    return <a href={props.href} title={props.title}>{button}</a>
  }
  return button;
  
}