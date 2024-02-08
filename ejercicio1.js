
const datos = [
    {
        nombre: "jose",
        apellido: "Avila",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216151
    },
    {
        nombre: "Ana",
        apellido: "Perez",
        fecha_nacimiento: "30/02/2001",
        puesto: "Gestion",
        matricula: 1216132
    },
    {
        nombre: "Julio",
        apellido: "Lopez",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216123
    }
]

/* let [usuario1, usuario2, usuario3, dato] = datos
let [carrera, año,mes,dia] = dato
var {nombre, apellido, fecha_nacimiento, puesto, matricula} = usuario1
console.log(nombre, apellido, fecha_nacimiento, puesto, matricula, carrera, año, mes, dia) 
var {nombre, apellido, fecha_nacimiento, puesto, matricula} = usuario2
console.log(nombre, apellido, fecha_nacimiento, puesto, matricula, carrera, año, mes, dia) 
var {nombre, apellido, fecha_nacimiento, puesto, matricula} = usuario3
console.log(nombre, apellido, fecha_nacimiento, puesto, matricula, carrera, año, mes, dia) 
 */


/*  const obtener_datos = (dato) => {
    let {nombre, apellido, fecha_nacimiento, puesto ,matricula} = dato;
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`)
} */

/*
let [dt1, dt2, dt3, dt4] = datos

obtener_datos(dt1)
obtener_datos(dt2)
obtener_datos(dt3)
let [texto,año, mes, dia] = dt4
console.log(`Los ultimos datos son: ${texto}, ${año}, ${mes}, ${dia}`) */


/* 
for(let i = 0; i < datos.length; i++){
    console.log(datos[i]);
} */

/* datos.map(({nombre,apellido,fecha_nacimiento,puesto,matricula} = persona) => {console.log(`Los 
datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`)}); */

const datos_basicos = (...datos) => {
    let [nombre,apellido,carrera] = datos;
    console.log(`Tus datos son: ${nombre}, ${apellido}, ${carrera}`)
}

datos_basicos('Ezequiel', 'Mendoza', 'Sistemas');