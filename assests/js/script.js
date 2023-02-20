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

    // response data - name, description, weather icon, temperature, humidity, wind speed
    var cityName = response.name;
    console.log(cityName);
    document.getElementById("cityName").innerHTML = cityName;

    var temperature = response.main.temp;
    console.log(temperature);
    document.getElementById("temperature").innerHTML = temperature + "&deg";

    var description = response.weather[0].description.toUpperCase();
    console.log(description);
    document.getElementById("description").innerHTML = description;

    var icon = response.weather[0].icon;
    console.log(icon);
    document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + "@4x.png";

    var wind = response.wind.speed;
    console.log(wind);
    document.getElementById("wind").innerHTML = wind + "m/s";

    var humidity = response.main.humidity;
    console.log(humidity);
    document.getElementById("humidity").innerHTML = humidity + "%";

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

        // Day 1 Variables
        var forecastDayOneDate = response.list[8].dt_txt.split(' ')[0];
        console.log(forecastDayOneDate);
        var descriptionDayOne = response.list[8].weather[0].description;
        var iconDayOne = response.list[8].weather[0].icon;
        var temperatureDayOne = response.list[8].main.temp;
        var humidityDayOne = response.list[8].main.humidity;
        console.log(descriptionDayOne);
        console.log(iconDayOne);
        console.log(temperatureDayOne);
        console.log(humidityDayOne);

        // Day 2 Variables
        var forecastDayTwoDate = response.list[16].dt_txt.split(' ')[0];
        console.log(forecastDayTwoDate);

        var descriptionDayTwo = response.list[16].weather[0].description;
        var iconDayTwo = response.list[16].weather[0].icon;
        var temperatureDayTwo = response.list[16].main.temp;
        var humidityDayTwo = response.list[16].main.humidity;
        console.log(descriptionDayTwo);
        console.log(iconDayTwo);
        console.log(temperatureDayTwo);
        console.log(humidityDayTwo);

        // Day 3 Variables
        var forecastDayThreeDate = response.list[24].dt_txt.split(' ')[0];
        console.log(forecastDayThreeDate);

        var descriptionDayThree = response.list[24].weather[0].description;
        var iconDayThree = response.list[24].weather[0].icon;
        var temperatureDayThree = response.list[24].main.temp;
        var humidityDayThree = response.list[24].main.humidity;
        console.log(descriptionDayThree);
        console.log(iconDayThree);
        console.log(temperatureDayThree);
        console.log(humidityDayThree);

        // Day 4 Variables
        var forecastDayFourDate = response.list[32].dt_txt.split(' ')[0];
        console.log(forecastDayFourDate);

        var descriptionDayFour = response.list[32].weather[0].description;
        var iconDayFour = response.list[32].weather[0].icon;
        var temperatureDayFour = response.list[32].main.temp;
        var humidityDayFour = response.list[32].main.humidity;
        console.log(descriptionDayFour);
        console.log(iconDayFour);
        console.log(temperatureDayFour);
        console.log(humidityDayFour);

        // Day 5 Variables
        var forecastDayFiveDate = response.list[39].dt_txt.split(' ')[0];
        console.log(forecastDayFiveDate);

        var descriptionDayFive = response.list[32].weather[0].description;
        var iconDayFive = response.list[32].weather[0].icon;
        var temperatureDayFive = response.list[32].main.temp;
        var humidityDayFive = response.list[32].main.humidity;
        console.log(descriptionDayFive);
        console.log(iconDayFive);
        console.log(temperatureDayFive);
        console.log(humidityDayFive);
});
}

// event listener for search button
searchForm.on('submit', searchWeather);
searchForm.on('submit', forecastData);