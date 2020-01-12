export const addPotentialLocation = potentialLocation => ({
  type: 'ADD_POTENTIAL_LOCATION',
  potentialLocation
});

export const removePotentialLocation = potentialLocation => ({
  type: 'REMOVE_POTENTIAL_LOCATION',
  potentialLocation
})

export const chooseCity = (city, lat, long) => ({
  type: 'CHOOSE_CITY',
  city: {
    city,
    lat,
    long
  }
})
