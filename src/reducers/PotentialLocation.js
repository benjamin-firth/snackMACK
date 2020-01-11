export const potentialLocation = (state = [], action) => {
  console.log({ action });
  switch (action.type) {
    case 'ADD_POTENTIAL_LOCATION':
      return [...state, action.potentialLocation];
    default:
      return state;
  }
}