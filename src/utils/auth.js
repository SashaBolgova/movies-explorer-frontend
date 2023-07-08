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

signUp = async ({ name, email, password }) => {
  const res = await fetch(`${this._url}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password }),
  })
    return this._checkAnswer(res);
}

signIn = async ({ email, password }) => {
  const res = await fetch(`${this._url}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    return this._checkAnswer(res);
  
}

getAuthentication = async (token) => {
  const res = await fetch(`${this._url}/users/me`, {
    credentials: 'include',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        //'Authorization': `Bearer ${token}`
      },
  })
    return this._checkAnswer(res);
}
}

const auth = new Auth({
  baseURL: 'https://api.sashadiploma.nomoredomains.rocks'
});

export default auth;
