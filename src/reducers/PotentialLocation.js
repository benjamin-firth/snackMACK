export const potentialLocation = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POTENTIAL_LOCATION':
      return [...state, action.potentialLocation];
    case 'REMOVE_POTENTIAL_LOCATION':
      return [...state].filter(location => location.name !== action.potentialLocation.name);
    default:
      return state;
  }
}