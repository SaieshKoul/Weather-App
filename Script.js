const apiKey = "88c15aff2d9e28a4f7aab1547ed9abaa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherImage = document.querySelector(".weather img");
const body = document.querySelector("section")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector('section').style.display = "none"
    }
    else {
        let data = await response.json();
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector("#humidValue").innerHTML = data.main.humidity + "%";
        document.querySelector("#Wspeed").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherImage.src = "images/cloudy.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherImage.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherImage.src = "images/snow.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherImage.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherImage.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Fog") {
            weatherImage.src = "images/foggy-day.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector("section").style.display ="block";
    }
   
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (evt) => {
    if(evt.key=="Enter"){
        checkWeather(searchBox.value);
    }   
})