import { locationForm } from './locationForm';

// initialise the containers for the app
function initialiseContainers(container){
    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';
    formContainer.appendChild(locationForm());
    container.appendChild(formContainer);
    const currentDataContainer = document.createElement('div');
    currentDataContainer.id = 'current-data-container';
    container.appendChild(currentDataContainer);
    const forecastDataContainer = document.createElement('div');
    forecastDataContainer.id = 'forecast-data-container';
    container.appendChild(forecastDataContainer);
    const currentHourDataContainer = document.createElement('div');
    currentHourDataContainer.id = 'current-hour-data-container';
    container.appendChild(currentHourDataContainer);
}

export { initialiseContainers }