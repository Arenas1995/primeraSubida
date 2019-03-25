const {argv} = require('./yargs');
const funciones = require('./funciones');

//console.log(argv);
//console.log('posicion 0 ' + argv._[0]);

let comando = argv._[0];

switch(comando){
    case 'crear':
    funciones.crear(argv);
    break

    case 'mostrar':
    funciones.mostrar();    
    break

    case 'mostrarest':
    funciones.mostrarest(argv.nombre);
    break

    case 'mostrarmat':
    funciones.mostrarmat();
    break 
    
    case 'mostrarpromedio':
    funciones.mostrarpromedio(argv.nombre);
    break

    default:
    console.log('No ingreso una funcion existente')
}
