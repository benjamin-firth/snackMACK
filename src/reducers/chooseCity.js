export const chooseCity = (state = 'calgary', action) => {
  switch(action.type) {
    case 'CHOOSE_CITY':
      return action.city;
    default:
      return state;
  }
}