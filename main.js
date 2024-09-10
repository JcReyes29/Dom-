/* const nombre = document.querySelector('#name')


nombre.addEventListener('input', validarNombre)

function validarNombre(){
    let nv = nombre.value;
    let slicedName = nv.split('@')

    if(nv.includes('@') && slicedName.length <= 2 && slicedName[1].includes('.')){
        nombre.classList.remove('invalid')
    } else {
        nombre.classList.add ('invalid')
    }

} */

    const users = [
        {
           id:  1, 
           nombre: 'Ronnie',
           apellido: 'Santoyo'
        },
        {
           id:  2, 
           nombre: 'Augusto',
           apellido: 'Santoyo'
        },
        {
           id:  3, 
           nombre: 'William',
           apellido: 'Santoyo'
        },
        {
           id:  4, 
           nombre: 'Oliver',
           apellido: 'Santoyo'
        },
        {
           id:  5, 
           nombre: 'Harold',
           apellido: 'Santoyo'
        },
       
    ]

function nombres() {
    
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]['nombre'])
        
    } 
}

const cajita = document.querySelector('#user_list')
    


/* for (let i = 0; i < users.length; i++) {
    
    user_list.innerHTML += "<li>" + users[i]['nombre'] + "</li>";
}
 */
for (let i = 0; i < users.length; i++) {
    let nv = users[i].nombre
    if (nv !== 'Oliver') {
        
        
    }
    
}

/* Push(); 
innerHTML  */

