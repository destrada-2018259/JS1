//Objetos en js

const futbolista = {
    nombre: 'Lionel Messi',
    equipo: 'PSG',
    altura: 1.69
}
//Desestructuracion
/**
 * 
const nombreJugador = futbolista.nombre;
const equipoJugador = futbolista.equipo;
const alturaJugador = futbolista.altura;
*/

//Desestructuracion de js

const { nombre, equipo, altura } = futbolista;
console.log(nombre, equipo, altura);