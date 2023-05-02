import './promo.sass'
import image from './../../images/promo__img.png'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrap">
        <img className='promo__image' src={image} alt="планета интернета" />
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer" className='promo__link'>
          <button className='promo__button'>Узнать больше</button>
        </a>
      </div>
    </section>
  );
}

export default Promo;
