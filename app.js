const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const  argv  = require('./config/yargs').argv;
var colors = require('colors');



let command = argv._[0];
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo.blue}`)).catch(err => console.log(err)); break;
    default:
        console.log('Comando no reconocido');
}

