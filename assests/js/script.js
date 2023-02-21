// variable 
var searchForm = $('#search-form');

// API Key
var apiKey = "7642fb4c9ad776474d4917a39a975982";

// Current Date
var currentDate = moment().format('dddd Do MMMM');
$('#currentDate').append(currentDate);

// Dates for forecast
// Day one
var forecastOne = moment().add(1, 'day').format('dddd Do MMMM');
$('#forecastOne').append(forecastOne);

// Day two
var forecastTwo = moment().add(2, 'day').format('dddd Do MMMM');
$('#forecastTwo').append(forecastTwo);

// Day three
var forecastThree = moment().add(3, 'day').format('dddd Do MMMM');
$('#forecastThree').append(forecastThree);

// Day four
var forecastFour = moment().add(4, 'day').format('dddd Do MMMM');
$('#forecastFour').append(forecastFour);

// Day five
var forecastFive = moment().add(5, 'day').format('dddd Do MMMM');
$('#forecastFive').append(forecastFive);

// Function to search for weather data
function searchWeather(event) {
    event.preventDefault();

    // variable for user input
    var userInput = $("#search-input").val(); 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + apiKey + "&units=metric";

    var weatherData = {};
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

    // response data - name, description, weather icon, temperature, humidity, wind speed
    // data variables
    var cityName = response.name;
    var temperature = response.main.temp;
    var description = response.weather[0].description;
    var wind = response.wind.speed;
    var humidity = response.main.humidity;

    // append data to html elements
    document.getElementById("cityName").innerHTML = cityName;
    document.getElementById("temperature").innerHTML = "Temperature: " + temperature + "&deg";
    document.getElementById("description").innerHTML = description;
    document.getElementById("wind").innerHTML = "Wind Speed: " + wind + "m/s";
    document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";
});
}

// function to generate weather forecast for the next five days
function forecastData(event) {
    event.preventDefault();

    var userInput = $("#search-input").val(); 
        
    // five day forecast data
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + apiKey + "&units=metric";

    
    var forecastData = {};
        $.ajax({
            url: forecastURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

    // Day 1 Variables
    var forecastDayOneDate = response.list[8].dt_txt.split(' ')[0];
    var descriptionForecastOne = response.list[8].weather[0].description;
    var iconForecastOne = response.list[8].weather[0].icon;
    var temperatureForecastOne = response.list[8].main.temp;
    var humidityForecastOne = response.list[8].main.humidity;
    
    // Day 1 append to html elements
    document.getElementById("descriptionForecastOne").innerHTML = descriptionForecastOne;
    document.getElementById("temperatureForecastOne").innerHTML = "Temperature: " + temperatureForecastOne + "&deg";
    document.getElementById("humidityForecastOne").innerHTML = "Humidity: " + humidityForecastOne + "%";
    document.getElementById("iconForecastOne").src = "http://openweathermap.org/img/wn/" + iconForecastOne + "@4x.png";

    // Day 2 Variables
    var forecastDayTwoDate = response.list[16].dt_txt.split(' ')[0];
    var descriptionForecastTwo = response.list[16].weather[0].description;
    var iconForecastTwo = response.list[16].weather[0].icon;
    var temperatureForecastTwo = response.list[16].main.temp;
    var humidityForecastTwo = response.list[16].main.humidity;

    // Day 2 append to html elements
    document.getElementById("descriptionForecastTwo").innerHTML = descriptionForecastTwo;
    document.getElementById("temperatureForecastTwo").innerHTML = "Temperature: " + temperatureForecastTwo + "&deg";
    document.getElementById("humidityForecastTwo").innerHTML = "Humidity: " + humidityForecastTwo + "%";
    document.getElementById("iconForecastTwo").src = "http://openweathermap.org/img/wn/" + iconForecastTwo + "@4x.png";

    // Day 3 Variables
    var forecastDayThreeDate = response.list[24].dt_txt.split(' ')[0];
    var descriptionForecastThree = response.list[24].weather[0].description;
    var iconForecastThree = response.list[24].weather[0].icon;
    var temperatureForecastThree = response.list[24].main.temp;
    var humidityForecastThree = response.list[24].main.humidity;

    // Day 3 append to html elements
    document.getElementById("descriptionForecastThree").innerHTML = descriptionForecastThree;
    document.getElementById("temperatureForecastThree").innerHTML = "Temperature: " + temperatureForecastThree + "&deg";
    document.getElementById("humidityForecastThree").innerHTML = "Humidity: " + humidityForecastThree + "%";
    document.getElementById("iconForecastThree").src = "http://openweathermap.org/img/wn/" + iconForecastThree + "@4x.png";

    // Day 4 Variables
    var forecastDayFourDate = response.list[32].dt_txt.split(' ')[0];
    var descriptionForecastFour = response.list[32].weather[0].description;
    var iconForecastFour = response.list[32].weather[0].icon;
    var temperatureForecastFour = response.list[32].main.temp;
    var humidityForecastFour = response.list[32].main.humidity;

    // Day 4 append to html elements
    document.getElementById("descriptionForecastFour").innerHTML = descriptionForecastFour;
    document.getElementById("temperatureForecastFour").innerHTML = "Temperature: " + temperatureForecastFour + "&deg";
    document.getElementById("humidityForecastFour").innerHTML = "Humidity: " + humidityForecastFour + "%";
    document.getElementById("iconForecastFour").src = "http://openweathermap.org/img/wn/" + iconForecastFour + "@4x.png";

    // Day 5 Variables
    var forecastDayFiveDate = response.list[39].dt_txt.split(' ')[0];
    var descriptionForecastFive = response.list[39].weather[0].description;
    var iconForecastFive = response.list[39].weather[0].icon;
    var temperatureForecastFive = response.list[39].main.temp;
    var humidityForecastFive = response.list[39].main.humidity;

    // Day 5 append to html elements
    document.getElementById("descriptionForecastFive").innerHTML = descriptionForecastFive;
    document.getElementById("temperatureForecastFive").innerHTML = "Temperature: " + temperatureForecastFive + "&deg";
    document.getElementById("humidityForecastFive").innerHTML = "Humidity: " + humidityForecastFive + "%";
    document.getElementById("iconForecastFive").src = "http://openweathermap.org/img/wn/" + iconForecastFive + "@4x.png";
});
}

// event listener for search button
searchForm.on('submit', searchWeather);
searchForm.on('submit', forecastData);