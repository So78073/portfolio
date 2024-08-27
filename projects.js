let pathArray = 0

const projects = [
    {
        title: 'Portifolio',
        first_Htwo: 'Sobre o projeto',
        first_p: 'O desenvolvimento deste portfólio foi extremamente satisfatório de trabalhar. Ver minhas ideias saírem de uma folha A4 para algo verdadeiramente bonito de se ver é uma sensação muito boa!',

        second_Htwo: 'Tecnologias usadas',
        second_p:'No portfólio, utilizei apenas o front-end. Eu até queria implementar alguma API, porém o GitHub Pages não suportaria algo grande. Mas tenho certeza de que posso fazer isso para a sua empresa ou projeto !!',
        img: "https://so78073.github.io/portfolio/assets/exemples/page001.png"
    
    },
    {
        title: 'ShizuRender iMG',
        first_Htwo: 'Sobre o projeto',
        first_p: 'Um software open source onde você pode redimenssionar centenas de imagens para o padrão que você queira com apenas 1 click !!',

        second_Htwo: 'Tecnologias usadas',
        second_p:'Neste projeto usei Python como back-end e como front utilizei a biblioteca PyQt5. pretendo dar continuidade no software pois ganhei 3h do meu dia com este simples projetos!',
        img: "https://so78073.github.io/portfolio/assets/exemples/page002.png"
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

}

