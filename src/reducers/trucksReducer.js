export const trucksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRUCKS':
      return action.trucks;
    default:
      return state;
  }
}