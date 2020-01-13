export const trucksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRUCKS':
      return action.trucks;
    case 'TOGGLE_POTENTIAL_LOCATION':
      return [...state].map(truck => {
        if (truck.name === action.truck.name) {
          return { ...truck, isPotentialLocation: !truck.isPotentialLocation }
        }
        return truck;
      });
    default:
      return state;
  }
}