const generate = document.getElementById('generate');
const randomP = document.getElementById('password');
const copy = document.getElementById('copy');

const generator = () =>{
    const char = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = ''
    for (let i = 0; i < 12; i++) {
        let a = Math.floor(Math.random()*char.length);
        let b = char[a];
        password += b  
    };
    randomP.value = password;
};

const clipboard = async() =>{
    try{
        if (randomP.value.length > 0){
        await navigator.clipboard.writeText(randomP.value);
        alert('Your password has been copied');
        } else {
            alert('Nothing to copy')
        }   
    } catch (err){
        console.log(err)
    }
}

generate.addEventListener('click', generator);
copy.addEventListener('click', clipboard)