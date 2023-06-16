// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "c57a3a97bbmsha5cc75697042176p165de9jsncbe409ccaf12",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "c57a3a97bbmsha5cc75697042176p165de9jsncbe409ccaf12",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";

  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
}
