export function mainCardComponent(day, app){
    const mainCard = `
    <div>
    <p>Vindstyrke:${day.wind_speed_max}</p>
    <p>Vindretning:${day.wind_direction}</p>
    <p>Nedbør:${day.precipitation_sum}</p>
    </div>`
    app.innerHTML += mainCard
}

