const apiConfig = {
  baseUrl: `http://engine.hotellook.com`,
  hotels: '/api/v2/cache.json',
};

function makeUrl(baseUrl, endpoint) {
  return `${baseUrl}${endpoint}`;
}

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
  constructor({ baseUrl, hotels }) {
    this._baseUrl = baseUrl;
    this._hotelsEndpoint = hotels;
  }

  async getHotels({ location, checkIn, checkOut }) {
    const url = makeUrl(this._baseUrl, this._hotelsEndpoint) + `?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`;
    return fetch(url)
      .then(handleResponse);
  }
}

export const apiHotels = new Api(apiConfig);
