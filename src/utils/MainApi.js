export function getActualToken () {
    return localStorage.getItem('token');
}

export class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }
    _handleResponse (res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    async getUserInfo () {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getActualToken()}`
            },
        })
        return this._handleResponse(res);
    }

    async setUserInfo (data) {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getActualToken()}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
        return this._handleResponse(res);
    }

    async getSavedMovies () {
        const res = await fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getActualToken()}`
            },
        })
        return this._handleResponse(res);
    }

    async saveMovie (data) {
        const res = await fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getActualToken()}`
            },
            body: JSON.stringify({
                nameRU: data.nameRU || '',
                nameEN: data.nameEN || '',
                country: data.country || '',
                director: data.director || '',
                duration: data.duration || '',
                year: data.year || '',
                description: data.description || '',
                image: `https://api.nomoreparties.co${data.image.url}` || '',
                trailerLink: data.trailerLink || '',
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}` || '',
                movieId: data.id,
            })
        })
        return this._handleResponse(res);
    }

    async deleteMovie (id) {
        const res = await fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getActualToken()}`
            },
        })
        return this._handleResponse(res);
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.sashadiploma.nomoredomains.rocks',
    // baseUrl: 'http://localhost:3001',
});
