
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
    "> Full-stack developer _"
];

let elemento = document.getElementById("codeMode");
let index = 0;
let linhaAtual = 0;
let apagando = false;
let corrigindoUltimaLetra = false;
let contagemCorrecao = 0;

function digitarCodigo() {
    let textoAtual = codigo[linhaAtual];
    
    if (!apagando && !corrigindoUltimaLetra) {
        if (index < textoAtual.length) {
            elemento.textContent += textoAtual.charAt(index);
            index++;
            setTimeout(digitarCodigo, 50); // Adiciona uma letra a cada 100ms
        } else {
            setTimeout(() => corrigindoUltimaLetra = true, 500); // Espera 500ms antes de "corrigir" a última letra
            setTimeout(digitarCodigo, 50);
        }
    } 
    else if (corrigindoUltimaLetra) {
        if (contagemCorrecao < 4) {
            // Apaga e recoloca a última letra 4 vezes
            if (elemento.textContent.endsWith(textoAtual.charAt(index - 1))) {
                elemento.textContent = textoAtual.substring(0, index - 1); // Apaga a última letra
            } else {
                elemento.textContent += textoAtual.charAt(index - 1); // Recoloca a última letra
                contagemCorrecao++;
            }
            setTimeout(digitarCodigo, 200); // Tempo entre apagar e recolocar
        } else {
            corrigindoUltimaLetra = false;
            setTimeout(() => apagando = true, 1000); // Após corrigir, espera 1s antes de apagar tudo
            setTimeout(digitarCodigo, 100);
        }
    } 
    else if (apagando) {
        if (index > 0) {
            elemento.textContent = textoAtual.substring(0, index - 1);
            index--;
            setTimeout(digitarCodigo, 50); // Apaga uma letra a cada 50ms
        } else {
            apagando = false;
            contagemCorrecao = 0; // Reseta a contagem de correção
            linhaAtual = (linhaAtual + 1) % codigo.length; // Vai para a próxima linha ou reinicia
            setTimeout(digitarCodigo, 500); // Espera 500ms antes de começar a digitar a próxima linha
        }
    }
}

digitarCodigo();





