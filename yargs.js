const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const mostarest = {
    nombre
}

const mostrarpromedio = {
    nombre
}

const argv = require('yargs')
            .command('crear', 'Crear un estudiante en la base de datos', creacion)
            //.command('mostrar', 'Mostrar los estudiante y sus notas') si no tiene argumentos que puede omitir
            .command('mostrarest', 'Mostrar los estudiante y sus notas', mostarest)
            //.command('mostrarmat', 'Mostrar los estudiante que ganaron matematicas')
            .command('mostrarpromedio', 'Mostrar los estudiante y sus notas', mostrarpromedio)
            .argv;

module.exports = {
    argv
};