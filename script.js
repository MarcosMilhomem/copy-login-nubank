const inputField = document.querySelector('.input-field');
const look = document.querySelector('#look');
const cpf = document.querySelector('#cpf');
const pass = document.querySelector('#password');

look.addEventListener('click', () => {
    if(look.classList.contains('fa-eye-slash')) {
        look.classList.remove('fa-eye-slash')
        look.classList.add('fa-eye')

        return;
    }
    look.classList.remove ('fa-eye')
    look.classList.add('fa-eye-slash')
});

cpf.addEventListener ('blur', function created() {
    let boxTo = document.querySelector('.second-text')
    let help = document.createElement("p")
    help.appendChild(document.createTextNode("Este campo é obrigatório"))
    boxTo.appendChild(help)

    
    cpf.removeEventListener('blur', created)
});

look.addEventListener('click', () => {
    const modePass = pass.getAttribute('type')

    if (modePass === 'password') {
        pass.setAttribute('type', 'text')

        return
    }
    pass.setAttribute('type', 'password');
});