const searchBtn = document.querySelector(".search-btn");
const searchText = document.querySelector(".search-box");
const apikey = "4938edcfef648165a938c68faa59af33";
async function checkWeather() {
  const cityName = searchText.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
  console.log(url);
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherIcon = data.weather[0].icon;
    const imgSrc = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    document.querySelector(".weather-icon").setAttribute("src", imgSrc);
    document.querySelector(".city").innerText = cityName;
    document.querySelector(".temp").innerText = temp + "°c";
    document.querySelector(".humidity").innerText = humidity + "%";
    document.querySelector(".wind").innerText = windSpeed + " km/hr";

    document.querySelector(".weather").style.display = "block";
  }
  searchText.value = "";
}

// checkWeather();

searchText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") checkWeather();
});
searchBtn.addEventListener("click", function () {
  checkWeather();
});
