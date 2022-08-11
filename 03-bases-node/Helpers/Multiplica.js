const fs = require('fs');
var colors = require('colors');

const getTablaMultiplicar = async (operador,multiplicaciones,inimult, listado) => {
    //operador 10,
    //multiplicaciones 10,
    //inimult 1
    //listado 1 
    //incr_it

    let salida='';
    
    
        console.log('============================');
        console.log(` Tabla de Multiplicar del ${operador}`.rainbow);
        console.log('============================\n');
        //console.log('Bucle for presentando la tabla de multiplicar:\n\n');
    
        
            for (let iteracion = 0; iteracion <= multiplicaciones; iteracion++) {
                if (iteracion==multiplicaciones){
                salida +=`${operador}`.blue + `x`.yellow + `${inimult+iteracion}`.random +  `=`.red + `${operador*(inimult+iteracion)}`.green;
                }
                else{
                    salida +=`${operador}`.blue + `x`.yellow + `${inimult+iteracion}`.random + `=`.red + `${operador*(inimult+iteracion)}\n`.green;
                }
            }
           
            if(listado===false){
           
                fs.writeFileSync(`C:/Users/MiguelOrtega/Desktop/Node/03-bases-node/salida/tabla-${operador}.txt`,`${salida}`);
               // console.log(`\n\nBucle finalizado, revisar archivo tabla-${operador}.txt\n`);
            }
            else{
                console.log(salida);
                fs.writeFileSync(`C:/Users/MiguelOrtega/Desktop/Node/03-bases-node/salida/tabla-${operador}.txt`,`${salida}`);
               // console.log(`\n\nBucle finalizado, revisar archivo tabla-${operador}.txt\n`);   
            }  
            
};



  module.exports = {
    getTablaMultiplicar : getTablaMultiplicar
  };