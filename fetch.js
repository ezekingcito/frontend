fetch(`local.php`)
.then((respuesta) => respuesta.json()
).then((respuesta) => {
    let [estado, msj] = respuesta;
    if (estado == 1) {
        console.log(msj)
    }else{
        console.error("se prodijo un error");
    }
}).catch((error) => {
    console.log(`se ha generado un error: ${error}`);
});