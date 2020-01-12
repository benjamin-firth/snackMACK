export const fetchFoodTrucks = async (city) => {
  const response = await fetch(`https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/${city}`)
  const foodTrucks = await response.json();
  return foodTrucks;
}