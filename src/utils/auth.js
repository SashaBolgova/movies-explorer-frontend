class Auth {
  constructor({ baseURL }) {
    this._url = baseURL;
  }

_checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

signUp(data) {
  return fetch(`${this._url}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then((res) => {
    return this._checkAnswer(res);
  })
}

signIn(data) {
  return fetch(`${this._url}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    return this._checkAnswer(res);
  })
}

getAuthentication(token) {
  return fetch(`${this._url}/users/me`, {
    credentials: 'include',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
      },
  })
  .then((res) => {
    return this._checkAnswer(res);
  });
}
}

const auth = new Auth({
  baseURL: 'https://api.sashadiploma.nomoredomains.rocks'
});

export default auth;