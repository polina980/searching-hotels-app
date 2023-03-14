import { GET_HOTELS_SUCCESS } from '../actions/hotels-list.js';

export const initialState = {
  hotelsList: [],
}

export const hotelsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTELS_SUCCESS: {
      return {
        ...state,
        hotelsList: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}
