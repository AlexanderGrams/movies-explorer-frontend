import './portfolio.sass'

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__projects'>
        <li className='portfolio__project'>
          <a className='portfolio__link' href='https://github.com/AlexanderGrams/how-to-learn'>Статичный сайт</a>
        </li>
        <li className='portfolio__project'>
          <a className='portfolio__link' href='https://github.com/AlexanderGrams/russian-travel'>Адаптивный сайт</a>
        </li>
        <li className='portfolio__project'>
          <a className='portfolio__link' href='https://github.com/AlexanderGrams/react-mesto-api-full-gha'>Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
