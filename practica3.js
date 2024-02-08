//Areglo de objetos  carrera, edad, escuela, semestre y objetos

const datos = [
    {
        nombre: "jose",
        apellido: "Avila",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216151,
        carrera: "Sistemas",
        escuela: "ITMA",
        semestre: "8VO"
    },
    {
        nombre: "Ana",
        apellido: "Perez",
        fecha_nacimiento: "30/02/2001",
        puesto: "Gestion",
        matricula: 1216132,
        carrera: "Sistemas",
        escuela: "ITMA",
        semestre: "8VO"
    },
    {
        nombre: "Julio",
        apellido: "Lopez",
        fecha_nacimiento: "10/05/2000",
        puesto: "Sistemas",
        matricula: 1216123,
        carrera: "Sistemas",
        escuela: "ITMA",
        semestre: "8VO"
    },
    {
        nombre: "Ezequiel",
        apellido: "Mendoza",
        fecha_nacimiento: "02/03/2002",
        puesto: "Sistemas",
        matricula: 201190014,
        carrera: "Sistemas",
        escuela: "ITMA",
        semestre: "8VO"
    },
    {
        nombre: "Alejandro",
        apellido: "Ortega",
        fecha_nacimiento: "10/05/1998",
        puesto: "Sistemas",
        matricula: 12121334,
        carrera: "Sistemas",
        escuela: "ITMA",
        semestre: "1ro"
    }
]

datos.map(({nombre,apellido,fecha_nacimiento,puesto,matricula,carrera,escuela,semestre} = persona) => {console.log(`Los 
datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${escuela}, ${semestre}`)});

datos.push(
    {
        nombre: "María",
        apellido: "García",
        fecha_nacimiento: "15/09/2000",
        puesto: "Desarrollo",
        matricula: 1216199,
        carrera: "Sistemas",
        escuela: "ITMA",
        semestre: "7mo"
    },
    {
        nombre: "Pedro",
        apellido: "Martínez",
        fecha_nacimiento: "03/12/1999",
        puesto: "Analista",
        matricula: 1216012,
        carrera: "Sistemas",
        escuela: "ITMA",
        semestre: "8VO"
    }
);

datos.map(({nombre,apellido,fecha_nacimiento,puesto,matricula,carrera,escuela,semestre} = persona) => {
    console.log(`Los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${escuela}, ${semestre}`);
});