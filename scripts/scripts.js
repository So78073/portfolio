
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aboltmeRef').classList.add("show")
    document.getElementById('mySkills').classList.add("show")
});

const elem = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver(function(entradas) {
    entradas.forEach(function(e) {
        const idMenuControl = e.target.id;
        if (e.isIntersecting) {
            e.target.classList.add('show')
        }
    })
});


elem.forEach(function(e) {
    myObserver.observe(e);
})


document.querySelector('.menuBt').addEventListener('click', function() {
    const menu = document.querySelector('.UlMenuConfigurator')
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
})

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('BackBt') || e.target.classList.contains('btOcamento')) {
        window.location.href = '#aboltmeRef';
    }
})


/* digitando code */
const codigo = [
    "> Full-stack developer_"
];

let elemento = document.getElementById("codeMode");
let index = codigo[0].length; // Começa com o texto totalmente escrito
let linhaAtual = 0;
let apagando = true; // Inicia apagando

// Preenche o texto inicialmente
elemento.textContent = codigo[linhaAtual]; 

function digitarCodigo() {
    let textoAtual = codigo[linhaAtual];
    let tempoDigitacao = Math.random() * 100 + 50; // Variar o tempo de digitação entre 50ms e 150ms

    if (apagando) {
        if (index > 0) {
            elemento.textContent = textoAtual.substring(0, index - 1);
            index--;

            // Pausa maior ao apagar palavras inteiras (após espaço)
            if (textoAtual.charAt(index) === ' ') {
                setTimeout(digitarCodigo, 300);
            } else {
                setTimeout(digitarCodigo, 50); // Apaga uma letra a cada 50ms
            }
        } else {
            apagando = false;
            setTimeout(digitarCodigo, 500); // Espera 500ms antes de começar a digitar de novo
        }
    } else {
        if (index < textoAtual.length) {
            elemento.textContent += textoAtual.charAt(index);
            index++;

            // Pausa maior após pontos, vírgulas e espaços
            if (['.', ',', ' '].includes(textoAtual.charAt(index - 1))) {
                tempoDigitacao += 200;
            }

            setTimeout(digitarCodigo, tempoDigitacao);
        } else {
            setTimeout(() => apagando = true, 1000); // Após digitar tudo, espera 1s antes de apagar
            setTimeout(digitarCodigo, 50);
        }
    }
}

digitarCodigo();


