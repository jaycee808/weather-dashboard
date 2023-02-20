// variable 
var searchForm = $('#search-form');

// API Key
var apiKey = "7642fb4c9ad776474d4917a39a975982";

// Current Date
var currentDate = moment().format('dddd Do MMMM');
$('#currentDate').append(currentDate);

// Dates for forecast
var forecastOne = moment().add(1, 'day').format('dddd Do MMMM');
$('#forecastOne').append(forecastOne);

var forecastTwo = moment().add(2, 'day').format('dddd Do MMMM');
$('#forecastTwo').append(forecastTwo);

var forecastThree = moment().add(3, 'day').format('dddd Do MMMM');
$('#forecastThree').append(forecastThree);

var forecastFour = moment().add(4, 'day').format('dddd Do MMMM');
$('#forecastFour').append(forecastFour);

var forecastFive = moment().add(5, 'day').format('dddd Do MMMM');
$('#forecastFive').append(forecastFive);

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
    document.getElementById("temperature").innerHTML = "Temperature: " + temperature + "&deg";

    var description = response.weather[0].description;
    console.log(description);
    document.getElementById("description").innerHTML = description;
    
    var wind = response.wind.speed;
    console.log(wind);
    document.getElementById("wind").innerHTML = "Wind Speed: " + wind + "m/s";

    var humidity = response.main.humidity;
    console.log(humidity);
    document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";

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
        

        var descriptionForecastOne = response.list[8].weather[0].description;
        var iconForecastOne = response.list[8].weather[0].icon;
        var temperatureForecastOne = response.list[8].main.temp;
        var humidityForecastOne = response.list[8].main.humidity;
        
        document.getElementById("descriptionForecastOne").innerHTML = descriptionForecastOne;
        document.getElementById("temperatureForecastOne").innerHTML = "Temperature: " + temperatureForecastOne + "&deg";
        document.getElementById("humidityForecastOne").innerHTML = "Humidity: " + humidityForecastOne + "%";
        document.getElementById("iconForecastOne").src = "http://openweathermap.org/img/wn/" + iconForecastOne + "@4x.png";

        console.log(descriptionForecastOne);
        console.log(iconForecastOne);
        console.log(temperatureForecastOne);
        console.log(humidityForecastOne);

        // Day 2 Variables
        var forecastDayTwoDate = response.list[16].dt_txt.split(' ')[0];
        console.log(forecastDayTwoDate);

        var descriptionForecastTwo = response.list[16].weather[0].description;
        var iconForecastTwo = response.list[16].weather[0].icon;
        var temperatureForecastTwo = response.list[16].main.temp;
        var humidityForecastTwo = response.list[16].main.humidity;

        document.getElementById("descriptionForecastTwo").innerHTML = descriptionForecastTwo;
        document.getElementById("temperatureForecastTwo").innerHTML = "Temperature: " + temperatureForecastTwo + "&deg";
        document.getElementById("humidityForecastTwo").innerHTML = "Humidity: " + humidityForecastTwo + "%";
        document.getElementById("iconForecastTwo").src = "http://openweathermap.org/img/wn/" + iconForecastTwo + "@4x.png";

        console.log(descriptionForecastTwo);
        console.log(iconForecastTwo);
        console.log(temperatureForecastTwo);
        console.log(humidityForecastTwo);

        // Day 3 Variables
        var forecastDayThreeDate = response.list[24].dt_txt.split(' ')[0];
        console.log(forecastDayThreeDate);

        var descriptionForecastThree = response.list[24].weather[0].description;
        var iconForecastThree = response.list[24].weather[0].icon;
        var temperatureForecastThree = response.list[24].main.temp;
        var humidityForecastThree = response.list[24].main.humidity;

        document.getElementById("descriptionForecastThree").innerHTML = descriptionForecastThree;
        document.getElementById("temperatureForecastThree").innerHTML = "Temperature: " + temperatureForecastThree + "&deg";
        document.getElementById("humidityForecastThree").innerHTML = "Humidity: " + humidityForecastThree + "%";
        document.getElementById("iconForecastThree").src = "http://openweathermap.org/img/wn/" + iconForecastThree + "@4x.png";

        console.log(descriptionForecastThree);
        console.log(iconForecastThree);
        console.log(temperatureForecastThree);
        console.log(humidityForecastThree);

        // Day 4 Variables
        var forecastDayFourDate = response.list[32].dt_txt.split(' ')[0];
        console.log(forecastDayFourDate);

        var descriptionForecastFour = response.list[32].weather[0].description;
        var iconForecastFour = response.list[32].weather[0].icon;
        var temperatureForecastFour = response.list[32].main.temp;
        var humidityForecastFour = response.list[32].main.humidity;

        document.getElementById("descriptionForecastFour").innerHTML = descriptionForecastFour;
        document.getElementById("temperatureForecastFour").innerHTML = "Temperature: " + temperatureForecastFour + "&deg";
        document.getElementById("humidityForecastFour").innerHTML = "Humidity: " + humidityForecastFour + "%";
        document.getElementById("iconForecastFour").src = "http://openweathermap.org/img/wn/" + iconForecastFour + "@4x.png";

        console.log(descriptionForecastFour);
        console.log(iconForecastFour);
        console.log(temperatureForecastFour);
        console.log(humidityForecastFour);

        // Day 5 Variables
        var forecastDayFiveDate = response.list[39].dt_txt.split(' ')[0];
        console.log(forecastDayFiveDate);
        

        var descriptionForecastFive = response.list[39].weather[0].description;
        var iconForecastFive = response.list[39].weather[0].icon;
        var temperatureForecastFive = response.list[39].main.temp;
        var humidityForecastFive = response.list[39].main.humidity;
        
        document.getElementById("descriptionForecastFive").innerHTML = descriptionForecastFive;
        document.getElementById("temperatureForecastFive").innerHTML = "Temperature: " + temperatureForecastFive + "&deg";
        document.getElementById("humidityForecastFive").innerHTML = "Humidity: " + humidityForecastFive + "%";
        document.getElementById("iconForecastFive").src = "http://openweathermap.org/img/wn/" + iconForecastFive + "@4x.png";

        console.log(descriptionForecastFive);
        console.log(iconForecastFive);
        console.log(temperatureForecastFive);
        console.log(humidityForecastFive);

});
}

// event listener for search button
searchForm.on('submit', searchWeather);
searchForm.on('submit', forecastData);