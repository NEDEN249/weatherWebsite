import { formatDate } from "./data";
import windIcon from './icons/wind-icon.png';
import windDirIcon from './icons/wind-dir.png';
import humidityIcon from './icons/humidity.png';
import feelsLikeIcon from './icons/feels-like.png';
import uvIcon from './icons/uv.png';
import locationIcon from './icons/location.png';
import loadingIcon from './icons/loading.gif';

//this file contains the functions which are used to generate the html elements for displaying the weather data

function loadingScreen(){
    const loadingContainer = document.createElement('div');
    loadingContainer.id = 'loading-container';
    const loading = document.createElement('img');
    loading.id = 'loading';
    loading.src = loadingIcon;
    loadingContainer.appendChild(loading);
    return loadingContainer;
}

function displayCurrentLocationData(currentData, container){
    const currentContainer = document.createElement('div');
    currentContainer.id = 'current-location-container';

    const locationDiv = document.createElement('div');
    locationDiv.id = 'location-div';
    
    const locationImg = document.createElement('img');
    locationImg.src = locationIcon;
    locationImg.id = 'location-img';

    const location = document.createElement('h2');
    location.id = 'location';
    location.textContent = currentData[0][0] + ', ' + currentData[0][1];

    const date = document.createElement('h3');
    date.id = 'date';
    date.textContent = formatDate(new Date());
    
    locationDiv.appendChild(locationImg);
    locationDiv.appendChild(location);
    currentContainer.appendChild(locationDiv);
    currentContainer.appendChild(date);
    container.appendChild(currentContainer);
}

function displayCurrentWeatherData(currentData, container){
    const currentDetailsContainer = document.createElement('div');
    currentDetailsContainer.id = 'current-details-weather-container';

    const currentTemperatureContainer = document.createElement('div');
    currentTemperatureContainer.id = 'current-temperature-container';
    
    const icon = currentData[1].icon;
    currentTemperatureContainer.style.backgroundImage = `url(${icon})`;
    
    const temperature = document.createElement('h3');
    temperature.id = 'current-temperature';
    temperature.textContent = currentData[1].temperature + '°';
   
    const condition = document.createElement('h3');
    condition.id = 'current-condition';
    condition.textContent = currentData[1].condition;

    const feelsLikeDiv = document.createElement('div');
    feelsLikeDiv.id = 'feels-like-div';
    const feelsLikeImg = document.createElement('img');
    feelsLikeImg.src = feelsLikeIcon;
    feelsLikeImg.id = 'feels-like-img';
    const feelsLike = document.createElement('h3');
    feelsLike.id = 'feels-like';
    feelsLike.textContent = currentData[1].feelslike + '°';
    feelsLikeDiv.appendChild(feelsLikeImg);
    feelsLikeDiv.appendChild(feelsLike);

    const humidityDiv = document.createElement('div');
    humidityDiv.id = 'humidity-div';
    const humidityImg = document.createElement('img');
    humidityImg.src = humidityIcon;
    humidityImg.id = 'humidity-img';
    const humidity = document.createElement('h3');
    humidity.id = 'humidity';
    humidity.textContent = currentData[1].humidity + '%';
    humidityDiv.appendChild(humidityImg);
    humidityDiv.appendChild(humidity);

    const windDiv = document.createElement('div');
    windDiv.id = 'wind-div';
    const windImg = document.createElement('img');
    windImg.src = windIcon;
    windImg.id = 'wind-img';
    const windSpeed = document.createElement('h3');
    windSpeed.id = 'wind-speed';
    windSpeed.textContent = currentData[1].windSp + ' km/h';
    windDiv.appendChild(windImg);
    windDiv.appendChild(windSpeed);

    const windDirDiv = document.createElement('div');
    windDirDiv.id = 'wind-dir-div';
    const windDirImg = document.createElement('img');
    windDirImg.src = windDirIcon;
    windDirImg.id = 'wind-dir-img';
    const windDirection = document.createElement('h3');
    windDirection.id = 'wind-direction';
    windDirection.textContent = currentData[1].windDir;
    windDirDiv.appendChild(windDirImg);
    windDirDiv.appendChild(windDirection);

    const uvDiv = document.createElement('div');
    uvDiv.id = 'uv-div';
    const uvImg = document.createElement('img');
    uvImg.src = uvIcon;
    uvImg.id = 'uv-img';
    const uv = document.createElement('h3');
    uv.id = 'uv';
    uv.textContent = currentData[1].uv;
    uvDiv.appendChild(uvImg);
    uvDiv.appendChild(uv);

    currentTemperatureContainer.appendChild(temperature);
    currentTemperatureContainer.appendChild(condition);
    currentDetailsContainer.appendChild(feelsLikeDiv);
    currentDetailsContainer.appendChild(humidityDiv);
    currentDetailsContainer.appendChild(windDiv);
    currentDetailsContainer.appendChild(windDirDiv);
    currentDetailsContainer.appendChild(uvDiv);
    container.appendChild(currentTemperatureContainer);
    container.appendChild(currentDetailsContainer);
}

function displayForecastWeatherData(forecastData, container){
    const forecastContainer = document.createElement('div');
    forecastContainer.id = 'forecast-weather-container';

    const today = new Date();
    const nextTwoDays = new Date(today.setDate(today.getDate() + 2));
    let day = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday', 
        5: 'Friday',
        6: 'Saturday'
    }
    day = day[nextTwoDays.getDay()];
    let forecastDays = ['Today', 'Tomorrow', day];

    for (let i = 0; i < forecastData.length; i++){
        const forecastDay = document.createElement('div');
        forecastDay.id = 'forecast-day';

        const date = document.createElement('h3');
        date.id = 'forecast-date';
        date.textContent = forecastDays[i];

        const icon = document.createElement('img');
        icon.src = forecastData[i].icon;
        icon.id = 'forecast-icon';

        const temperature = document.createElement('h3');
        temperature.id = 'for-temperature';
        temperature.textContent = forecastData[i].minTemp + ' / ' + forecastData[i].maxTemp + '°';

        const rain = document.createElement('h3');
        rain.id = 'rain';
        rain.textContent = 'Rain: ' + forecastData[i].rain + '%';

        const humidity = document.createElement('h3');
        humidity.id = 'humidity';
        humidity.textContent = 'Humidity: ' + forecastData[i].humidity+ '%';
        forecastDay.appendChild(date);

        forecastDay.appendChild(icon);
        forecastDay.appendChild(temperature);
        forecastDay.appendChild(rain);
        forecastContainer.appendChild(forecastDay);
    }
    container.appendChild(forecastContainer);
}

function displayCurrentHourlyData(currentHourData, container){
    const hourlyContainer = document.createElement('div');
    hourlyContainer.id = 'hourly-weather-container';

    for (let i = 0; i < currentHourData.length; i++){
        const hourly = document.createElement('div');
        hourly.id = 'hourly';

        const time = document.createElement('h3');
        time.id = 'time';
        time.textContent = currentHourData[i].time + ':00';

        const icon = document.createElement('img');
        icon.src = currentHourData[i].icon;
        icon.id = 'icon';

        const rain = document.createElement('h3');
        rain.id = 'rain';
        rain.textContent = 'Rain: ' + currentHourData[i].rain + '%';

        const temperature = document.createElement('h3');
        temperature.id = 'temperature';
        temperature.textContent = currentHourData[i].temperature + '°';
        
        hourly.appendChild(time);
        hourly.appendChild(icon);
        hourly.appendChild(rain);
        hourly.appendChild(temperature);
        hourlyContainer.appendChild(hourly);
    }
    container.appendChild(hourlyContainer);
}

export { displayCurrentLocationData, displayCurrentWeatherData, displayForecastWeatherData, displayCurrentHourlyData, loadingScreen }