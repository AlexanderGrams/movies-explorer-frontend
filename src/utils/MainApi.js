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

  deletMovie(movieId){
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
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
