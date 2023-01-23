//callback

//no es mas que una funcion dentro de otra
//responde al tiempo en el que se ejecuta
/**
 * 
 
setTimeout( function () {
    console.log('Hola Mundo');
}, 3000)

setTimeout( ()=>{
    console.log('Hola Mundo');
}, 5000)
*/
const getUserById = (id, callback) => {

    const usuario = {
        id,
        nombre: 'victor'
    }
           
            
            if (id === 20) {
                callback(`El usuario con id: ${id} no existe en la DB`);
            } else{
                callback(null, usuario);
            }
            

            //Ternario

        id === 20
            ? callback(`El usuario con id: ${id} no existe en la DB`)
            : callback(null, usuario);
            
        }
    getUserById(1, (err, usuario) => {
        if (err) {
            return console.log(err);
        } 
         console.log('usuario en la base de datos' , usuario)
        
    });