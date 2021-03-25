var nomCom = []

var cantidad = prompt("ingresa cantidad de nombres a guardar")
function koders() {
    for(i = 1; i <= parseInt(cantidad); i++){
       
        var nombre = prompt("nombre")
        var apellido = prompt("apellido")
        nomCom.push([nombre,apellido])
        
    }
    console.log(nomCom)
}

koders()

function agregarDeNuevo(){
var agregar = prompt("¿deseas agregar de nuevo? s/n?")
if(agregar == "s"){
    koders()
}else{
    console.log("salida")
}
    
}
agregarDeNuevo()

function eliminarRandom(){
    var eliminar = prompt("¿deseas eliminar aleatoriamente? s/n")
    if(eliminar == "s"){
        aleatorio = Math.floor(Math.random()*(nomCom.length));
seleccion = nomCom[aleatorio];
nomCom.splice(aleatorio, 1);
    }else{
        console.log("salida")
    }
}
eliminarRandom()

