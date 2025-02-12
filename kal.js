let pantalla = document.querySelector("#display")
let pantallaError = document.querySelector("#display-error")
let uno = document.querySelector("#uno")
let dos = document.querySelector("#dos")
let tres = document.querySelector("#tres")
let cuatro = document.querySelector("#cuatro")
let cinco = document.querySelector("#cinco")
let seis = document.querySelector("#seis")
let siete = document.querySelector("#siete")
let ocho = document.querySelector("#ocho")
let nueve = document.querySelector("#nueve")
let cero = document.querySelector("#cero")
let sumar = document.querySelector("#sumar")
let restar = document.querySelector("#restar")
let dividir = document.querySelector("#dividir")
let multiplicar = document.querySelector("#multiplicar")
let clear = document.querySelector("#clear")
let igual = document.querySelector("#igual")
let punto = document.querySelector("#punto")

// ----- R E P E A T ------
uno.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent +  "1"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
dos.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent +  "2"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
tres.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent +  "3"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
cuatro.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent +  "4"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
cinco.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent +  "5"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
seis.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent +  "6"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
siete.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "7"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
ocho.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "8"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
nueve.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "9"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})

cero.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "0"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
restar.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "-"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
sumar.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "+"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
dividir.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "/"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
multiplicar.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "*"
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
punto.addEventListener("click", () =>{
    pantalla.textContent = pantalla.textContent + "."
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
clear.addEventListener("click",() => {
    pantalla.innerHTML = "";
    if(pantallaError.textContent === "Error!"){
        pantallaError.textContent = ''
    }
})
igual.addEventListener("click",() => {
    try{
        pantalla.textContent = eval(pantalla.textContent);
    }catch{
        pantallaError.textContent = "Error!"
        pantalla.textContent = ''
    }
})