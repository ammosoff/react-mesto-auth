/* api аутентификации */

export const BASE_URL = 'https://auth.nomoreparties.co';
export const headers = {
  'Content-Type': 'application/json'
}

  // проверка ответа от сервера на корректность(используется в остальных методах)
  const getRequestState = (res) =>  {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`)  // если ошибка, отклоняем промис
  }

  const request = (url, options) => {
    return fetch(`${BASE_URL}${url}`, options).then(getRequestState)
  }

  export const register = (password, email) => {
    console.log(email, password)
    return request('/signup', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        password,
        email
      })
    })
  };