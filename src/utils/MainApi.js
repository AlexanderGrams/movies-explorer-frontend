import { BASE_URL } from "./constant"

class MainApi {
  constructor({baseUrl}){
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  giveInfoUser( email, name ) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "name": name,
      })
    }).then(this._checkResponse)
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse)
  };

  giveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "country": movie.country,
        "director": movie.director,
        "duration": movie.duration,
        "year": movie.year,
        "description": movie.description,
        "image": `https://api.nomoreparties.co${movie.image.url}`,
        "trailerLink": movie.trailerLink,
        "nameRU": movie.nameRU,
        "nameEN": movie.nameEN,
        "thumbnail": `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        "movieId": movie.id,
    })
    }).then(this._checkResponse)
  }

  deletMovie(movie){
    const moviId = movie.idSavedMovie || movie._id;
    return fetch(`${this._baseUrl}/movies/${moviId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      }
    }).then(this._checkResponse)
  };

}


export const mainApi = new MainApi({
  baseUrl: BASE_URL,
});
