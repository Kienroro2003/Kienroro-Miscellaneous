const API_KEY = "5d484df590297db4ce36b59920be0161";
const DEFAULT_VALUE = "__";

const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const icon = document.querySelector(".weather-icon");
const state = document.querySelector(".weather-state");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".speed");

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("change", (event) => {
  console.log(event.target.value);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&units=metric&lang=vi`
  )
    .then(async (res) => {
      try {
        const data = await res.json();
        cityName.textContent = data.name || DEFAULT_VALUE;

        temperature.textContent = data.main.temp || DEFAULT_VALUE;
        state.textContent = data.weather[0].description || DEFAULT_VALUE;
        icon.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );

        sunrise.textContent =
          moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE;
        sunset.textContent =
          moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
        humidity.textContent = data.main.humidity + "%" || DEFAULT_VALUE;

        windSpeed.textContent =
          (data.wind.speed * 3.6).toFixed(2) + "km" || DEFAULT_VALUE;
      } catch (err) {
        console.log(err);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
