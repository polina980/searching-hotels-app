import { combineReducers } from 'redux';
import { hotelsListReducer } from './hotels-list.js';

export const rootReducer = combineReducers({
  hotelsList: hotelsListReducer,
})
