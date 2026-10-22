const BASE_URL = "https://api.open-meteo.com/v1/forecast"

function buildURL(lat, long) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: long,
    daily: "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant",
    hourly: "temperature_2m,precipitation,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,temperature_80m",
    timezone: "Europe/Berlin",
    wind_speed_unit: "ms"
  })
  return `${BASE_URL}?${params}`
}

export async function getWeatherData(lat, long) {
  const response = await fetch(buildURL(lat, long))
  if (!response.ok) throw new Error(`Open-Meteo error: ${response.status}`)
  return response.json()
}