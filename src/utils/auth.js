class Auth {
  constructor({ baseURL }) {
    this.url = baseURL;
  }

_checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

signUp(data) {
  return fetch(`${this.url}/signup`, {
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
  .then((data) => {
    localStorage.setItem('jwt', data.token);
    return data;
  });
}

signIn(data) {
  return fetch(`${this.url}/signin`, {
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
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    } else {
      return;
    }
  });
}

getAuthentication(token) {
  return fetch(`${this.url}/users/me`, {
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