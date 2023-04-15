function vegan(invitados) {
    
    let contador = 0;
    for (let invitado in invitados ){
        if (invitados[invitado].vegan === true){
            contador++;
        }
    }
    return contador;
    }
    let invitado = {
        luna: {
            
            vegan: false,
        },
        sebas:{
           
            vegan:false,
    
        },
        marce:{
            
            vegan:false,
    
        },
        nicky:{
           
            vegan:true,
        },
    
    
    }