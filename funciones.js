const fs = require('fs');
listaEstudiante = [];

const crear = (estudiante) => {
    let estu = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    listaEstudiante.push(estu);
    console.log(listaEstudiante);
    guardar();
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiante);
    fs.writeFile('listado.json', datos, (err)=>{
        if (err) throw (err);
        console.log('Archivo creado con exito');    
    })
}
module.exports = {
    crear
}