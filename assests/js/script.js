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
    var latitude = response.coord.lat.toFixed(2);
    console.log(latitude);
    var longitude = response.coord.lon.toFixed(2);
    console.log(longitude);

});
}

// function to generate weather forecast for the next five days
function forecastData(event) {
    event.preventDefault();

    var userInput = $("#search-input").val(); 
    console.log(userInput);
        
    
    // five day forecast data
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + apiKey + "&units=metric";

        console.log(forecastURL);
    
        var forecastData = {};
        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

    
    var forecastDayOne = response.list[8].dt_txt.split(' ')[0];
    console.log(forecastDayOne);

    var forecastDayTwo = response.list[16].dt_txt.split(' ')[0];
    console.log(forecastDayTwo);

    var forecastDayThree = response.list[24].dt_txt.split(' ')[0];
    console.log(forecastDayThree);

    var forecastDayFour = response.list[32].dt_txt.split(' ')[0];
    console.log(forecastDayFour);

    var forecastDayFive = response.list[39].dt_txt.split(' ')[0];
    console.log(forecastDayFive);


});
}


// event listener for search button
searchForm.on('submit', searchWeather);
searchForm.on('submit', forecastData);