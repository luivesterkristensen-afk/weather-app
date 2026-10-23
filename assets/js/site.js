import { initWeather } from "./controller/locationCallback.js"
import { buttonOneComponent, buttonTwoComponent } from "./view/buttonComponents.js"
import { buildMain, buildPageTwo } from "./controller/buildPages.js"
import { headerComponent } from "./view/headerComponent.js"
const app = document.getElementById("app")



// Vent på service workeren, så også det første API-kald kan gemmes.
async function startApp() {
    if ("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("./service-worker.js")
            await navigator.serviceWorker.ready
            if (!navigator.serviceWorker.controller) {
                await new Promise((resolve) => {
                    navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true })
                })
            }
        } catch (error) {
            console.error("Service worker kunne ikke startes:", error)
        }
    }

    buildMain()
}

startApp()
