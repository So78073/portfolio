let pathArray = 0

console.log('ajshdkajsghd');


const projects = [
    {
        title: 'Portifolio',
        first_Htwo: 'Sobre o projeto',
        first_p: 'O desenvolvimento deste portfólio foi extremamente satisfatório de trabalhar. Ver minhas ideias saírem de uma folha A4 para algo verdadeiramente bonito de se ver é uma sensação muito boa!',

        second_Htwo: 'Tecnologias usadas',
        second_p:'No portfólio, utilizei apenas o front-end. Eu até queria implementar alguma API, porém o GitHub Pages não suportaria algo grande. Mas tenho certeza de que posso fazer isso para a sua empresa ou projeto !!',
        img: "https://so78073.github.io/portfolio/assets/exemples/page001.png",
        link: 'https://github.com/So78073',
    
    },
    {
        title: 'PDF analyse GraficaOffset',
        first_Htwo: 'Sobre o projeto',
        first_p: 'Transforme a maneira como você gerencia suas imagens com o RenderImage. Redimensione centenas ou milhares de imagens em massa para as dimensões desejadas, sem perder qualidade. Principais Recursos: Redimensionamento em Massa: Selecione uma pasta e redimensione todas as imagens em .png ou .jpeg de uma só vez. Qualidade Preservada: Tecnologia avançada que mantém a qualidade original. Fácil de Usar: Interface intuitiva, ideal para fotógrafos e designers. Personalização Total: Escolha as dimensões exatas que você precisa. Experimente o RenderImage hoje e otimize suas imagens com rapidez e eficiência. Baixe agora e comece a transformar suas imagens!',

        second_Htwo: 'Tecnologias usadas',
        second_p:'Neste projeto, utilizei Python para o back-end e a biblioteca PyQt5 no front-end. Para o funcionamento do software, implementei manipuladores de PDF e imagens (usando as bibliotecas fitz e PIL).',
        img: "https://so78073.github.io/portfolio/assets/exemples/page002.png",
        link: 'https://so78073.github.io/ShizuDevWorks/'
    },
    {
        title: 'ShizuRender iMG',
        first_Htwo: 'Sobre o projeto',
        first_p: 'Nosso software permite que você selecione arquivos e redimensione imagens PNG e JPEG para as dimensões desejadas, sem perder qualidade. Com uma interface intuitiva, você ajusta rapidamente o tamanho das imagens para suas necessidades específicas. Principais recursos: seleção de arquivos, suporte a PNG e JPEG, redimensionamento personalizado, preservação da qualidade e interface fácil de usar. Transforme suas imagens com eficiência e mantenha a melhor qualidade possível!',

        second_Htwo: 'Tecnologias usadas',
        second_p:'Neste projeto, utilizei Python para o back-end e a biblioteca PyQt5 no front-end. Para o funcionamento do software, implementei manipuladores de imagens e os/sys.',
        img: "https://so78073.github.io/portfolio/assets/exemples/page003.png",
        link: 'https://so78073.github.io/RenderImgWebSite/'
    }
]

document.addEventListener('click', function (e) {
    console.clear()
    if (e.target.classList.contains('btProjects')) {

        pathArray = e.target.getAttribute('mode') === "L" ? pathArray + 1  : pathArray - 1;
        pathArray = pathArray > (projects.length - 1) ? 0 : pathArray


        setTimeout(function() {
            RenderProjectSequence(projects[pathArray])
        }, 300)
        
         console.log(projects.length);
    }
})

function RenderProjectSequence(objProject) {
    title_Project = document.getElementById('title_project').innerText = objProject.title
    first_h2 = document.getElementById('first_h2').innerText = objProject.first_Htwo
    first_p = document.getElementById('first_p').innerText = objProject.first_p

    second_h2 = document.getElementById('second_h2').innerText = objProject.second_Htwo
    second_p = document.getElementById('second_p').innerText = objProject.second_p
    img = document.getElementById('proj_exemple').src = objProject.img
    console.log(document.getElementById('linkHook').href = objProject.link);
    link = document.getElementById('linkHook').href = objProject.link

}

