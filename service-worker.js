const CACHE_NAME = "weather-app-simple-v2"

// Gem disse filer, så appen også kan åbnes uden internet.
const FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./assets/css/site.css",
    "./assets/css/reset.css",
    "./assets/js/site.js",
    "./assets/js/controller/buildPages.js",
    "./assets/js/controller/locationCallback.js",
    "./assets/js/model/locationapi.js",
    "./assets/js/model/weatherdata.js",
    "./assets/js/view/buttonComponents.js",
    "./assets/js/view/headerComponent.js",
    "./assets/js/view/mainCardComponent.js",
    "./assets/js/view/weatherIcon.js",
    "./assets/img/favicon.icon",
    "./assets/img/icon-192.png",
    "./assets/img/icon-512.png",
    "./assets/img/weatherIcons/clear.svg",
    "./assets/img/weatherIcons/mostly-clear.svg",
    "./assets/img/weatherIcons/partly-cloudy.svg",
    "./assets/img/weatherIcons/overcast.svg",
    "./assets/img/weatherIcons/fog.svg",
    "./assets/img/weatherIcons/drizzle.svg",
    "./assets/img/weatherIcons/sleet.svg",
    "./assets/img/weatherIcons/rain.svg",
    "./assets/img/weatherIcons/snow.svg",
    "./assets/img/weatherIcons/showers.svg",
    "./assets/img/weatherIcons/snow-showers.svg",
    "./assets/img/weatherIcons/thunderstorm.svg",
    "./assets/img/weatherIcons/thunderstorm-hail.svg",
    "./assets/img/weatherIcons/unknown.svg"
]

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES))
    )
    self.skipWaiting()
})

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim())
})

// Prøv nettet først. Brug den gemte kopi, hvis nettet fejler.
async function getResponse(request) {
    const cache = await caches.open(CACHE_NAME)
    const url = new URL(request.url)

    // Gem altid vejret samme sted, selv hvis GPS-positionen ændrer sig.
    const key = url.origin === "https://api.open-meteo.com"
        ? "./saved-weather"
        : request

    try {
        const response = await fetch(request)
        if (!response.ok) throw new Error("Kunne ikke hente data")
        await cache.put(key, response.clone())
        return response
    } catch (error) {
        const saved = await cache.match(key)
        if (saved) return saved
        throw error
    }
}

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url)
    if (event.request.method !== "GET") return
    if (url.origin !== self.location.origin && url.origin !== "https://api.open-meteo.com") return

    event.respondWith(getResponse(event.request))
})

