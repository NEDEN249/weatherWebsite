function createCurrentWeatherObject(temperature, uv, windSp, windDir, condition, feelslike, humidity, date, icon){
    return {
        temperature: temperature,
        uv: uv,
        windSp: windSp,
        windDir: windDir,
        condition: condition,
        feelslike: feelslike,
        humidity: humidity,
        date: date,
        icon: icon
    }
}

function createForecastWeatherObject(minTemp, maxTemp, rain, humidity, icon){
    return {
        minTemp: minTemp,
        maxTemp: maxTemp,
        rain: rain,
        humidity: humidity,
        icon: icon
    }
}

function createHourlyWeatherObject(rain, temperature, time, icon){
    return {
        rain: rain,
        temperature: temperature,
        time: time,
        icon: icon
    }
}

export { createCurrentWeatherObject, createForecastWeatherObject, createHourlyWeatherObject}