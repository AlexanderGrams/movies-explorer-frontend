import TitleSection from '../TitleSection/TitleSection';
import './techs.sass'

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__wrap'>
        <TitleSection>Технологии</TitleSection>
        <div className='techs__details'>
          <h3 className='techs__title'>7 технологий</h3>
          <p className='techs__subtitle'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className='techs__list'>
            <li className='techs__item'>
              HTML
            </li>
            <li className='techs__item'>
              SASS
            </li>
            <li className='techs__item'>
              JS
            </li>
            <li className='techs__item'>
              React
            </li>
            <li className='techs__item'>
              Git
            </li>
            <li className='techs__item'>
              Express.js
            </li>
            <li className='techs__item'>
              mongoDB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
