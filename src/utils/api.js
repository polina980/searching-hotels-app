const apiConfig = {
  baseUrl: `http://engine.hotellook.com`,
  hotels: '/api/v2/cache.json?location=Moscow&checkIn=2023-03-15&checkOut=2023-03-19',
  // /api/v2/cache.json заменить позже
  defaultHeaders: {
    'Content-Type': 'application/json',
  }
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

function getHotels(baseUrl, hotels, defaultHeaders) {
  const options = {
    method: 'GET',
    headers: defaultHeaders
  }
  return fetch(makeUrl(baseUrl, hotels), options)
    .then(handleResponse);
}

class Api {
  constructor({ baseUrl, hotels, defaultHeaders }) {
    this._baseUrl = baseUrl;
    this._hotelsEndpoint = hotels;
    this._defaultHeaders = defaultHeaders;
  }

  getHotels() {
    return getHotels(this._baseUrl, this._hotelsEndpoint, this._defaultHeaders);
  }
}

export const apiHotels = new Api(apiConfig);
