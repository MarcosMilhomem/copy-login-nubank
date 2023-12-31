const inputField = document.querySelectorAll('.input-field');
const look = document.querySelector('#look');
const cpf = document.querySelector('#cpf');
const pass = document.querySelector('#password');
const txtHelp = document.querySelector('#txt-help')


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
    /*    WARNING     */
    const warning = document.querySelector('#warning');

    warning.style.display = 'block';
    warning.style.color = '#D35B59';

    let boxTo = document.querySelector('.second-text')
    let help = document.createElement("p")
    help.appendChild(document.createTextNode("Este campo é obrigatório"))
    boxTo.appendChild(help)

    help.style.color = '#D35B59'
    boxTo.style.letterSpacing = '1px'
    inputField[0].style.borderBottom = '2px solid #D35B59'

    cpf.removeEventListener('blur', created);
});

pass.addEventListener('blur', () => {

    txtHelp.innerHTML= "Este campo é obrigatório";

    txtHelp.style.color = '#D35B59'
    txtHelp.style.letterSpacing = '1px'
    inputField[1].style.borderBottom = '2px solid #D35B59'
    look.style.color = '#D35B59'
    if (pass.value.length >= 1) {
        pass.removeEventListener('blur', pass)
        addEventListener('input', () => {
            txtHelp.innerHTML= "A senha deve ter 8 dígitos ou mais"
        });
    }
});


look.addEventListener('click', () => {
    const modePass = pass.getAttribute('type')

    if (modePass === 'password') {
        pass.setAttribute('type', 'text')

        return
    }
    pass.setAttribute('type', 'password');
});