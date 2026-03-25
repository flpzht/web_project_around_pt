// fetch("https://around-api.pt-br.tripleten-services.com/v1/users/me", {
//   method: "GET",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch("https://around-api.pt-br.tripleten-services.com/v1/cards", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch("https://around-api.pt-br.tripleten-services.com/v1/users/me", {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
//   body: JSON.stringify({
//     name: "Jacques Cousteau",
//     about: "Explorador",
//   }),
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch("https://around-api.pt-br.tripleten-services.com/v1/cards", {
//   method: "POST",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Vale de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//   }),
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch(`https://around-api.pt-br.tripleten-services.com/v1/cards/${card._id}`, {
//   method: "DELETE",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//   },
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch(`https://around-api.pt-br.tripleten-services.com/v1/cards/${card._id}/likes`, {
//     method: "POST",
//     headers: {
//       Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//     },
//   },
// )
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch(`https://around-api.pt-br.tripleten-services.com/v1/cards/${card._id}/likes`, {
//     method: "DELETE",
//     headers: {
//       Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//     },
//   },
// )
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// fetch(`https://around-api.pt-br.tripleten-services.com/v1/users/me/avatar`, {
//   method: "PATCH",
//   headers: {
//     Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     avatar:
//       "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_avatar.jpg",
//   }),
// })
//   .then((res) => res.json())
//   .then((result) => {
//     console.log(result);
//   });


export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
        if (res.ok) return res.json();
    }).catch((err) => console.log(err));
  }
    getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
        if (res.ok) return res.json();
    }).catch((err) => console.log(err));
  }
    setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
        if (res.ok) return res.json();
    }).catch((err) => console.log(err));
  }
    addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
        if (res.ok) return res.json();
    }).catch((err) => console.log(err));
  }
    deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
        if (res.ok) return res.json();
    }).catch((err) => console.log(err));
  }
    likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "POST",
      headers: this._headers,
    }).then((res) => {
        if (res.ok) return res.json();
    }).catch((err) => console.log(err));
  }
    unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
        if (res.ok) return res.json();
    }).catch((err) => console.log(err));
  }
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    Authorization: "63d45159-fd92-477c-9dd6-c2859fb9ad61",
    "Content-Type": "application/json",
  },
});
// api.getInitialCards().then((result) => console.log(result));
// api.deleteCard("69c2c7a3084d88001b0aedbc").then((result) => console.log(result))
