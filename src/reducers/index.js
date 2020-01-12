import { combineReducers } from 'redux';
import { potentialLocation } from './PotentialLocation';
import { chooseCity } from './chooseCity';

const rootReducer = combineReducers({
  potentialLocation,
  city: chooseCity
})

export default rootReducer;