import '../styles/global.scss'

import * as smoothscroll from 'smoothscroll-polyfill';

if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
  let scroll = window.scrollY > 10;
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 10 && !scroll) {
      document.body.classList.add('scroll');
      scroll = true;
    } else if (window.scrollY <= 10 && scroll) {
      document.body.classList.remove('scroll');
      scroll = false;
    }
  });
}



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}