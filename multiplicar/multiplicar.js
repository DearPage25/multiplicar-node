const fs = require('fs');
const colors = require('colors');
let listarTabla = async (base, limite = 10) => {
    console.log('========================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('========================='.green);
    
    let data = '';
    for (let index = 1; index <= limite; index++) {
     console.log(data=  `${base} * ${index} = ${base*index}`);
    }
}





let crearArchivo = ( base, limite = 10 ) => {
    return new Promise ((resolve, reject) =>{
       
        if( !Number(base)){
            reject(`El valor introducido - ${base} - no es un numero`);
            return;
        }
        if( !Number(limite)){
            reject(`El valor introducido - ${limite} - no es un numero`);
            return;
        }
        
        let data ='';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) reject( err );
        else resolve(`tabla-${base}-al-${limite}.txt`)

        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}

