const generate = document.getElementById('generate');
const randomP = document.getElementById('password');

const generator = () =>{
    const char = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = ''
    for (let i = 0; i < 12; i++) {
        let a = Math.floor(Math.random()*char.length);
        let b = char[a];
        password += b  
    };
    randomP.value = password;
}

generate.addEventListener('click', generator)