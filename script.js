const searchBtn = document.querySelector(".search-btn");
const searchText = document.querySelector(".search-box");
const apikey = "4938edcfef648165a938c68faa59af33";
let cityName = "pilkhuwa";
checkWeather();
async function checkWeather() {
  if (searchText.value != null) cityName = searchText.value;
  else cityName = "pilkhuwa";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
  const response = await fetch(url);
  searchText.value = "";
  let data = await response.json();
  console.log(data);
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  document.querySelector(".city").innerText = cityName;
  document.querySelector(".temp").innerText = temp + "°c";
  document.querySelector(".humidity").innerText = humidity + "%";
  document.querySelector(".wind").innerText = windSpeed + "km/hr";
}

// checkWeather();

searchText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") checkWeather();
});
searchBtn.addEventListener("click", function () {
  checkWeather();
});
