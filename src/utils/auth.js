export const BASE_URL = 'https://api.sashadiploma.nomoredomains.rocks';

const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const signUp = async (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(checkAnswer)
}

export const signIn = async (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(checkAnswer)
}

export const checkAuth = async (token) => {
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
      },
  })
  .then(checkAnswer)
}