// @ts-nocheck
import { writable } from 'svelte/store';

// Exporting weather and forecast stores with default null value
export const weather = writable(null);
export const forecast = writable(null);

const api_key = '20a54f6ac51286c670229d827da64cd9';

/**
 * Fetch weather data 
 * @param {string} city
 */
export async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            weather.set(data);
            await getForecast(data.coord.lat, data.coord.lon);
        } else {
            console.log('Failed to fetch the data');
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Fetch weather forecast data
 * @param {number} lat
 * @param {number} lon
 */
async function getForecast(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            let fc = await response.json();
            fc.list = summarizeForecast(fc.list);
            forecast.set(fc.list);
        } else {
            console.log('Failed to fetch the data');
        }
    } catch (error) {
        console.log(error);
    }
}

/**
 * Summarize forecast data 
 * @param {Array} forecastList
 * @returns {Array}
 */
function summarizeForecast(forecastList) {
    const dailyData = {};
    forecastList.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString('en-GB', {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        });
        if (!dailyData[date]) {
            dailyData[date] = {
                temp: [],
                weather: forecast.weather[0].description,
                clouds: forecast.clouds.all,
                wind_speed: forecast.wind.speed,
                icon: forecast.weather[0].icon,
            };
        }
        dailyData[date].temp.push(forecast.main.temp);
    });

    return Object.keys(dailyData).map(date => {
        const temps = dailyData[date].temp;
        const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
        return {
            date,
            temp: avgTemp,
            weather: dailyData[date].weather,
            clouds: dailyData[date].clouds,
            wind_speed: dailyData[date].wind_speed,
            icon: dailyData[date].icon,
        };
    });
}