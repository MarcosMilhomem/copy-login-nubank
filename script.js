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

pass.addEventListener ('blur', () => {
    const help = document.querySelector('#txt-help')
});

look.addEventListener('click', () => {
    const modePass = pass.getAttribute('type')

    if (modePass === 'password') {
        pass.setAttribute('type', 'text')

        return
    }
    pass.setAttribute('type', 'password');
});