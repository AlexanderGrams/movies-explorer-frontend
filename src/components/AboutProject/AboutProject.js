import TitleSection from '../TitleSection/TitleSection';
import './aboutProject.sass'

function AboutProject() {
  return (
    <section className="aboutProject">
      <div className='aboutProject__wrap'>
        <TitleSection>О проекте</TitleSection>
        <ul className='aboutProject__columns'>
          <li className='aboutProject__column'>
            <h3 className='aboutProject__column-title'>Дипломный проект включал 5 этапов</h3>
            <p className='aboutProject__column-subtitle'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className='aboutProject__column'>
            <h3 className='aboutProject__column-title'>На выполнение диплома ушло 5 недель</h3>
            <p className='aboutProject__column-subtitle'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className='aboutProject__timeline-table'>
          <li className='aboutProject__timeline aboutProject__timeline_type_back'>1 неделя</li>
          <li className='aboutProject__timeline aboutProject__timeline_type_front'>4 недели</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
