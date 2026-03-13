import {manifest} from "./manifest.js"

async function loadComponent(name,target){
const path=manifest[name]
const html=await fetch(path).then(r=>r.text())
document.querySelector(target).innerHTML=html
}

window.loadComponent=loadComponent  