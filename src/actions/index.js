export const chooseCity = (city, lat, long) => ({
  type: 'CHOOSE_CITY',
  city: {
    city,
    lat,
    long
  }
})

export const setTrucks = trucks => ({
  type: 'SET_TRUCKS',
  trucks
})

export const togglePotentialLocation = truck => ({
  type: 'TOGGLE_POTENTIAL_LOCATION',
  truck
})
