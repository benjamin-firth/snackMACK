export const mockPotentialLocations = [{
  desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
  isPotentialLocation: true,
  image: undefined,
  location: {
    display: "Prairie Horizon Pop Up Market",
    latitude: 51.19624517,
    longitude: -113.99491753,
    time: 1578762000
  },
  name: "Baked And Loaded"
}, 
{
  desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
  isPotentialLocation: true,
  image: undefined,
  location: {
    display: "Prairie Horizon Pop Up Market",
    latitude: 51.19624517,
    longitude: -113.99491753,
    time: 1578762000
  },
  name: "Test Food Truck 2"
}];

export const mockPotentialLocationsAfterToggle = [{
  desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
  isPotentialLocation: false,
  image: undefined,
  location: {
    display: "Prairie Horizon Pop Up Market",
    latitude: 51.19624517,
    longitude: -113.99491753,
    time: 1578762000
  },
  name: "Baked And Loaded"
}, 
{
  desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
  isPotentialLocation: true,
  image: undefined,
  location: {
    display: "Prairie Horizon Pop Up Market",
    latitude: 51.19624517,
    longitude: -113.99491753,
    time: 1578762000
  },
  name: "Test Food Truck 2"
}]

export const mockFilteredPotentialLocations = {
  desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
  image: undefined,
  location: {
    display: "Prairie Horizon Pop Up Market",
    latitude: 51.19624517,
    longitude: -113.99491753,
    time: 1578762000
  },
  name: "Baked And Loaded"
}

export const setTrucksPotentialLocationActionObj = {
  type: 'SET_TRUCKS',
  trucks: {
    desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
    image: undefined,
    location: {
      display: "Prairie Horizon Pop Up Market",
      latitude: 51.19624517,
      longitude: -113.99491753,
      time: 1578762000
    },
    name: "Baked And Loaded"
  }
}

export const mockAddPotentialLocationActionObj = {
  type: 'ADD_POTENTIAL_LOCATION',
  potentialLocation: {
    desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
    image: undefined,
    location: {
      display: "Prairie Horizon Pop Up Market",
      latitude: 51.19624517,
      longitude: -113.99491753,
      time: 1578762000
    },
    name: "Baked And Loaded"
  }
}

export const mockRemovePotentialLocationActionObj = {
  type: 'REMOVE_POTENTIAL_LOCATION',
  potentialLocation: {
    desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
    image: undefined,
    location: {
      display: "Prairie Horizon Pop Up Market",
      latitude: 51.19624517,
      longitude: -113.99491753,
      time: 1578762000
    },
    name: "Baked And Loaded"
  }
}

export const mockChooseCity = {
  type: 'CHOOSE_CITY',
  city: 'test'
}

export const mockTruckAction = {
  type: 'TOGGLE_POTENTIAL_LOCATION',
  truck: {
    desc: "Our food trailer is designed for efficiently producing quality comfort food! We serve baked potatoes loaded with a variety of toppings! BBQ Pulled Pork Tex Mex Mushroom Swiss Classic English Sheppard's Pie",
    isPotentialLocation: true,
    image: undefined,
    location: {
      display: "Prairie Horizon Pop Up Market",
      latitude: 51.19624517,
      longitude: -113.99491753,
      time: 1578762000
    },
    name: "Baked And Loaded"
  }
}

export const mockCity = {
  city: 'calgary',
  lat: 51.0,
  long: -114.0
}

export const mockCityActionObj = {city: {city: "calgary", lat: 51, long: -114}, type: "CHOOSE_CITY"}
