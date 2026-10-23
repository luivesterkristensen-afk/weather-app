import { initWeather, initWeatherPageTwo } from "./locationCallback.js"
import { buttonOneComponent, buttonTwoComponent } from "../view/buttonComponents.js"

const app = document.getElementById("app")

export function buildMain(){ 
app.className = "pageOne"
app.innerHTML = ""
const dynSection = document.createElement("section")
dynSection.id = "dyn"
app.appendChild(dynSection)
initWeather(dynSection)
buttonOneComponent(app)
}

export function buildPageTwo(){
app.className = "pageTwo"
app.innerHTML = ""
const dynSection = document.createElement("section")
dynSection.id = "dyn"
app.appendChild(dynSection)
initWeatherPageTwo(dynSection)
buttonTwoComponent(app)
}
