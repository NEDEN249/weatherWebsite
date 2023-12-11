import { displayCurrentLocationData, displayCurrentWeatherData, displayForecastWeatherData, displayCurrentHourlyData } from "./displayWeatherData";
import { createCurrentWeatherObject, createForecastWeatherObject, createHourlyWeatherObject } from "./weatherObject";
import { currentDataContainer, forecastDataContainer, currentHourDataContainer } from "./index";

//contains the data for the weather conditions at the given time
let currentData = [];
//contains the data conditions for the current day and the next 2 days
let forecastData = [];
//contains the data conditions for each hour of next 24 hours
let currentHourData = [];

//asynchronous function that fetches the weather data from the weather api
async function getWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=baa070e815f843288da152813232111&q=${location}&days=3&aqi=yes`, {mode: 'cors'});
    const data = await response.json();
    processResponse(data);  
}

function errorHandler(err){
    console.log(err);
    alert('Invalid query. Please try again.');
}

function processResponse(data){
    if (document.getElementById('loading-container') != null){
        document.getElementById('loading-container').remove();
    }
    currentData.push([data.location.name, data.location.region]);
    extractCurrentWeatherData(data.current);
    extractForecastWeatherData(data.forecast);
    extractHourlyWeatherData(data.forecast);
    displayCurrentLocationData(currentData, currentDataContainer);
    displayCurrentWeatherData(currentData, currentDataContainer);
    displayForecastWeatherData(forecastData, forecastDataContainer);
    displayCurrentHourlyData(currentHourData, currentHourDataContainer);
}

//extracts the current weather data from the json file and stores it in the currentData array
function extractCurrentWeatherData(data){
    const temperature = data.temp_c;
    const uv = data.uv;
    const windSpeed = data.wind_kph;
    const windDirection = data.wind_dir;
    const condition = data.condition.text;
    const feelsLike = data.feelslike_c;
    const humidity = data.humidity;
    const date = data.is_day;
    const icon = data.condition.icon;
    currentData.push(createCurrentWeatherObject(temperature, uv, windSpeed, windDirection, condition, feelsLike, humidity, date, icon));
}

//extracts the hourly weather data for the next 24hrs from the json file and stores it in the currentHourData array
function extractHourlyWeatherData(data){
    const currentTime = new Date().toLocaleTimeString();
    const currentHour = parseInt(currentTime.substring(0, 2));
    for (let i = currentHour; i < data.forecastday[0].hour.length; i++){
        let rain = data.forecastday[0].hour[i].chance_of_rain;
        let temperature = data.forecastday[0].hour[i].temp_c;
        let icon = data.forecastday[0].hour[i].condition.icon;
        currentHourData.push(createHourlyWeatherObject(rain, temperature, i, icon));
    }
    const remainingHours = currentHour + 1;
    for (let j = 0; j < remainingHours; j++){
        let rain = data.forecastday[1].hour[j].chance_of_rain;
        let temperature = data.forecastday[1].hour[j].temp_c;
        let icon = data.forecastday[0].hour[j].condition.icon;
        currentHourData.push(createHourlyWeatherObject(rain, temperature, j, icon));
    }
}

//extracts the forecast (next 3 days) weather data from the json file and stores it in the forecastData array
function extractForecastWeatherData(data){
    for (let i = 0; i < data.forecastday.length; i++){
        let minimumTemperature = data.forecastday[i].day.mintemp_c;
        let maximumTemperature = data.forecastday[i].day.maxtemp_c;
        let rain = data.forecastday[i].day.daily_chance_of_rain;
        let humidity = data.forecastday[i].day.avghumidity;
        let icon = data.forecastday[i].day.condition.icon;
        forecastData.push(createForecastWeatherObject(minimumTemperature, maximumTemperature, rain, humidity, icon));
    }
}

//formats the date to a more readable format
function formatDate(date){
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    return date.toLocaleDateString("en-US", options);
}

export { forecastData, currentData, currentHourData, getWeatherData, formatDate, errorHandler }