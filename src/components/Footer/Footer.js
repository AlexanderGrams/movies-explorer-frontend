import './footer.sass'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrap'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__container'>
          <p className='footer__data'>©&#160;{new Date().getFullYear()}</p>
          <div className='footer__links'>
            <a href='/#' target="_blank" rel="noreferrer" className='footer__link'>Яндекс.Практикум</a>
            <a href='/#' target="_blank" rel="noreferrer" className='footer__link'>Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
