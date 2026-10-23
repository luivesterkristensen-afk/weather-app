import { getWeatherIcon } from "./weatherIcon.js"

export function headerComponent(day, app){
    const icon = getWeatherIcon(day.weather_code)
    const header = `<header><img src="${icon}"><h1>${day.temp_max}</h1></header>`
    app.innerHTML += header
}