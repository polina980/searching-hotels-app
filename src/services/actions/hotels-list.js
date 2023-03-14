import { apiHotels } from '../../utils/api.js';

export const GET_HOTELS_SUCCESS = 'GET_HOTELS_SUCCESS';

const getHotelsSuccess = (payload) => ({
  type: GET_HOTELS_SUCCESS,
  payload
})

export function getHotelsList() {
  return (dispatch) =>
    apiHotels.getHotels()
      .then(({ payload }) => {
        dispatch(getHotelsSuccess(payload));
      })
      .catch((error) => {
        console.log(error)
      })
}
