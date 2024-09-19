let pathArray = 0

console.log('ajshdkajsghd');

const skills = [
    {
        tittle: '> Minha carreira _',
        text: 'Desde os 10 anos, quando tive minha primeira interação com o PyCharm, descobri minha paixão por programação. Desde então, venho me dedicando a explorar e aprender novas tecnologias constantemente. Estou sempre em busca de aperfeiçoar minhas habilidades, seja desenvolvendo projetos, estudando novas linguagens ou testando ferramentas inovadoras. A tecnologia é mais do que uma carreira para mim, é uma jornada contínua de aprendizado e descoberta. Desde os 10 anos, estudo a área de tecnologia, começando com minha primeira experiência no PyCharm. Estou sempre em busca de aprender novas tecnologias e melhorar minhas habilidades para me manter atualizado no campo da programação e desenvolvimento.'
    }, 
    {
        tittle: '> Ferramentas _',
        text: 'Desde os 10 anos, quando tive minha primeira interação com o PyCharm, descobri minha paixão por programação. Desde então, venho me dedicando a explorar e aprender novas tecnologias constantemente. Estou sempre em busca de aperfeiçoar minhas habilidades, seja desenvolvendo projetos, estudando novas linguagens ou testando ferramentas inovadoras. A tecnologia é mais do que uma carreira para mim, é uma jornada contínua de aprendizado e descoberta. Desde os 10 anos, estudo a área de tecnologia, começando com minha primeira experiência no PyCharm. Estou sempre em busca de aprender novas tecnologias e melhorar minhas habilidades para me manter atualizado no campo da programação e desenvolvimento.'
    },
    {
        tittle: '> Contribuições _',
        text: 'Estou constantemente envolvido em ajudar a comunidade de tecnologia, compartilhando conhecimentos e colaborando em projetos. Além disso, mantenho meus projetos atualizados no GitHub, garantindo que minha contribuição para a comunidade esteja sempre em evolução e alinhada com as melhores práticas.'
    },
    {
        tittle: '> I love this ^^ _',
        text: 'Como desenvolvedor, estou sempre em busca de evolução e aprimoramento. Dedico-me a aprender novas tecnologias, atualizar meus projetos no GitHub e colaborar com a comunidade. Meu objetivo é avançar na carreira, contribuindo com soluções inovadoras e mantendo-me à frente das tendências do setor.'
    }
];



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
    if (e.target.classList.contains('btProjects')) {

        pathArray = e.target.getAttribute('mode') === "L" ? pathArray + 1  : pathArray - 1;
        
        pathArray = pathArray > (projects.length - 1) ? 0 : pathArray
        if (pathArray < 0) {
            pathArray = projects.length - 1
        }
        


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





function selectedSkill(key) {
    let dc = document.querySelectorAll('.cardcarrer');

    dc.forEach(card => card.classList.remove('selectedKill'));

    dc[key].classList.add('selectedKill');

    let titleElement = document.getElementById('titleSkills');
    let textElement = document.getElementById('textSkills');

    if (titleElement && skills[key]) {

        titleElement.innerText = skills[key].tittle;
        textElement.innerText = skills[key].text;
    } else {
        console.error('Elemento ou dados inválidos.');
}
}



