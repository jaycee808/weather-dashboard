// variable 
var searchForm = $('#search-form');

// API Key
var apiKey = "7642fb4c9ad776474d4917a39a975982";

// function to search for weather data
function searchWeather(event) {
    event.preventDefault();

    var userInput = $("#search-input").val(); 
    console.log(userInput);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + apiKey + "&units=metric";

    var weatherData = {};
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    // response data - description, weather icon, temperature, humidity, wind speed
    var cityName = response.name;
    console.log(cityName);
    var temperature = response.main.temp;
    console.log(temperature)
    var description = response.weather[0].description;
    console.log(description);
    var icon = response.weather[0].icon;
    console.log(icon);
    var wind = response.wind.speed;
    console.log(wind);
    var humidity = response.main.humidity;
    console.log(humidity);

    // five day forecast data
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + apiKey + "&units=metric";

    var forecastData = {};
    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
});
});
}



// event listener for search button
searchForm.on('submit', searchWeather);