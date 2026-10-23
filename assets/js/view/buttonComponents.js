import { buildMain, buildPageTwo } from "../controller/buildPages.js"

export function buttonOneComponent(app){
    let button = document.createElement("button")
    button.innerText = `Se ugen →`
    button.addEventListener("click", ()=>{
        // Byg denne page
        buildPageTwo()
    })
    app.appendChild(button)
}

export function buttonTwoComponent(app){
    let button = document.createElement("button")
    button.innerText = `Tilbage`
    button.addEventListener("click", ()=>{
        // Byg denne page
        buildMain()
    })
    app.appendChild(button)
}