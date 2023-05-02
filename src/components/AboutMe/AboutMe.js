import TitleSection from '../TitleSection/TitleSection';
import './aboutMe.sass'
import image from '../../images/about-me__image.jpg'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className='About-me'>
      <div className='About-me__wrap'>
        <TitleSection>Студент</TitleSection>
        <div className='About-me__main'>
          <img className='About-me__image' src={image} alt="Портрет автора" />
          <h3 className='About-me__name'>Александр Грамс</h3>
          <p className='About-me__profession'>
            Фронтенд-разработчик, 25 лет
          </p>
          <p className='About-me__description'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href='https://github.com/AlexanderGrams' target="_blank" rel="noreferrer" className='About-me__link'>Github</a>
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;
