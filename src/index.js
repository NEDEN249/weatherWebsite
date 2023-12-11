import './style.css';
import { forecastData, currentData, currentHourData, getWeatherData, errorHandler } from './data'
import { emptyContainer } from './emptyContainer';
import { footer } from './footer';
import { initialiseContainers } from './initContainer';
import { loadingScreen } from './displayWeatherData';

const container = document.getElementById("container");

// get a default location 
getWeatherData('Perth');

initialiseContainers(container);
const currentDataContainer = document.getElementById("current-data-container");
const forecastDataContainer = document.getElementById("forecast-data-container");
const currentHourDataContainer = document.getElementById("current-hour-data-container");
const formContainer = document.getElementById("form-container");
footer(container);

// handles the form submission 
const form = document.getElementById('location-form');
form.addEventListener('submit', (e) => {
    formContainer.appendChild(loadingScreen());
    e.preventDefault();
    forecastData = [], currentData = [], currentHourData = [];
    const locationInput = document.getElementById('location-input');
    getWeatherData(locationInput.value).catch(errorHandler);
    locationInput.value = '';
    emptyContainer('current-data-container');
    emptyContainer('forecast-data-container');
    emptyContainer('current-hour-data-container');
});

export { container, currentDataContainer, forecastDataContainer, currentHourDataContainer, formContainer }