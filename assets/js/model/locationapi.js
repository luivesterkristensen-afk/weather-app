// København bruges som reserveposition (lat = breddegrad, long = længdegrad).
const fallback = { lat: 57.0467, long: 9.9359 }

export function getPosition() {
  // En Promise lader os vente på positionen med await getPosition().
  // resolve(position) betyder: "Resultatet er klar – her er positionen."
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser")
      // Brug reservepositionen. return stopper koden her.
      return resolve(fallback)
    }

    navigator.geolocation.getCurrentPosition(
      // Ved succes gives brugerens koordinater som resultat.
      (position) => resolve({ lat: position.coords.latitude, long: position.coords.longitude }),
      () => {
        console.log("no pos error")
        // Ved fejl eller afvist tilladelse bruges reservepositionen.
        resolve(fallback)
      }
    )
  })
}
