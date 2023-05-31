export const BASE_URL = 'https://api.films.nomoredomains.monster';
export const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const PATTERN_EMAIL = "[A-z0-9!#$%&'*+-/=?^_`{|]{1,64}@[A-z0-9-.]{2,253}\\.[A-z]{2,63}";

export const calcCardsCounter = () => {
  const counter = { init: 12, more: 3 };

  if (window.innerWidth < 1040) {
    counter.init = 8;
    counter.more = 2;
  }
  if (window.innerWidth < 481) {
    counter.init = 5;
    counter.more = 1;
  }

  return counter;
}
