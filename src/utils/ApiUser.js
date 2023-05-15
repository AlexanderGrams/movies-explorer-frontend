import { BASE_URL } from "./constant"

class ApiUser {
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
  }
}


export const apiUser = new ApiUser({
  baseUrl: BASE_URL,
});
