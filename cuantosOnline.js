// cuantos usuarios estan online
function cuantosOnline(usuarios){
let contador = 0;
for (let usuario in usuarios){
    if (usuarios[usuario].online === true){
        contador++;
    }
}
return contador;
}
const usuarios = {
    toni: {
        edad: 33,
        online: true,
    },
    emi:{
        edad:25,
        online:true,

    },
    fran:{
        edad:25,
        online:false,

    },
    agus:{
        edad:24,
        online:false,
    },


}
const resultado = cuantosOnline(usuarios);
console.log (resultado);
