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

signUp = async (data) => {
  const res = await fetch(`${this._url}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
 
    return this._checkAnswer(res);
 
}

signIn = async (data) => {
  const res = await fetch(`${this._url}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    return this._checkAnswer(res);
  
}

getAuthentication = async (token) => {
  const res = await fetch(`${this._url}/users/me`, {
    credentials: 'include',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
    return this._checkAnswer(res);
}
}

const auth = new Auth({
  baseURL: 'https://api.sashadiploma.nomoredomains.rocks'
});

export default auth;
