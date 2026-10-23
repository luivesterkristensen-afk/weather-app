import { initWeather } from "./controller/locationCallback.js"
import { buttonComponent } from "./view/buttonComponent.js"
import { headerComponent } from "./view/headerComponent.js"
const app = document.getElementById("app")

const dynSection = document.createElement("section")
dynSection.id = "dyn"
app.appendChild(dynSection)
initWeather(dynSection)
buttonComponent(app)

