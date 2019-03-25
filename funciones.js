const fs = require('fs');
listaEstudiante = [];

const crear = (estudiante) => {
    listar();
    let estu = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiante.find(nom => nom.nombre == estudiante.nombre)
    if (!duplicado) {
        listaEstudiante.push(estu);
        console.log(listaEstudiante);
        guardar();
    }else{
        console.log('Ya existe un estudiante con ese nombre, por favor verifique el nombre del estudiante que desea guardar')
    }

}

const listar = () => {
    try {
        listaEstudiante = require('./listado.json');
    } catch (error) {
        listaEstudiante = [];
    }

}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiante);
    fs.writeFile('listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado con exito');
    })
}

const mostrar = () => {
    listar()
    console.log('Notas de los estudiantes: ')
    listaEstudiante.forEach(estudiante => {
        console.log('El nombre del estudiante es: \n ' + estudiante.nombre);
        console.log('Sus notas son: ')
        console.log( ' Matematicas: ' + estudiante.matematicas)
        console.log( ' Ingles: ' + estudiante.ingles)
        console.log( ' Programacion: ' + estudiante.programacion + '\n')
    });
}

const mostrarest = (nombre) => {
    listar()
    let buscarEstudiante = listaEstudiante.find(buscar => buscar.nombre == nombre)
    if (!buscarEstudiante) {
        console.log('No existe el estudiante que desea buscar')
    }else{
        console.log('El nombre del estudiante es: \n ' + buscarEstudiante.nombre);
        console.log('Sus notas son: ')
        console.log( ' Matematicas: ' + buscarEstudiante.matematicas)
        console.log( ' Ingles: ' + buscarEstudiante.ingles)
        console.log( ' Programacion: ' + buscarEstudiante.programacion + '\n')
    }
}

const mostrarmat = () => {
    listar()
    let gana = listaEstudiante.filter(mat => mat.matematicas >= 3);

    if (gana.length == 0){
        console.log('Ningun estudiante gano matematicas')
    }else {
        gana.forEach(estudiante => {
            console.log('El nombre del estudiante es: \n ' + estudiante.nombre);
            console.log( 'Su nota de matematicas fue de: ' + estudiante.matematicas + '\n')
        });
    }
}

const mostrarpromedio = (nombre) => {
    listar()
    let buscarEstudiante = listaEstudiante.find(buscar => buscar.nombre == nombre)
    if (!buscarEstudiante) {
        console.log('No existe el estudiante que desea buscar')
    }else{
        console.log('El nombre del estudiante es: \n ' + buscarEstudiante.nombre);
        console.log( ' Su promedio es de: ' + (buscarEstudiante.matematicas+buscarEstudiante.ingles+buscarEstudiante.programacion)/3)
    }
}

module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarmat,
    mostrarpromedio
}