require('colors');
const fs = require('fs');

const llistarTaula = (base, limit = 10) => {

    console.log('=================='.green);
    console.log('Taula del '`${base}`.green);
    console.log('=================='.green);

    for (let i = 0; i < limit; i++) {
        console.log(`${base} * ${base}`);
    }
}

const crearFitxer = (base, limit = 10) => {
    if (!Number(base)) {
        console.log("El valor de la base ha de ser numeric");
        return;

    let data = '';
    for (let i = 0; i < limit; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    }

    fs.writeFile
    else.console.log("object");
}