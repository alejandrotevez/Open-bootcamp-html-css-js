// localStorage.setItem("nombre", "Tomas")
// localStorage.setItem("nombre", "Miguel")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify({ nombre: "tomas", edad:19 }))

// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stingify -> convierte un objeto/array en string
// JSON.parse -> convierte un objeto/array convertido a traves de un de javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Tomas")

/* Cookies */

document.cookie = "nombreCookie=TomasCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 6, 14).toUTCString()


console.log(document.cookie)

