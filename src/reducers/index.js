import { combineReducers } from 'redux';
import { potentialLocation } from './PotentialLocation';
import { chooseCity } from './chooseCity';
import { trucksReducer } from './trucksReducer';

const rootReducer = combineReducers({
  allTrucks: trucksReducer,
  potentialLocation,
  city: chooseCity
})

export default rootReducer;