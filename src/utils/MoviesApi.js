import { MOVIES_URL } from "./constant"

class MoviesApi {
  constructor({moviesUrl}){
    this._moviesUrl = moviesUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._moviesUrl}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(this._checkResponse)
  }
}


export const moviesApi = new MoviesApi({
  moviesUrl: MOVIES_URL,
});
