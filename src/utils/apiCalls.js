export const fetchFoodTrucks = async () => {
  const response = await fetch('https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/calgary')
  const foodTrucks = await response.json();
  return foodTrucks;
}