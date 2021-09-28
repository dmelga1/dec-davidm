require("colors");
const argv = require('.config/yargs').argv;

const {llistarTaula};

console.clear();

console.log(argv);
let param = argv._[0];

switch(param) {
    case 'Llistar':
        llistarTaula(argv.base, argv.limit);
        break;
    case 'Crear':
        crearFitxer(argv.base, argv.limit);
        break;
    default:
        console.log('Comanda no reconeguda');
}
