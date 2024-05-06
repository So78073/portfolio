document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('mousedown', function(e) {
        if (e.button === 2) {
            e.preventDefault();
        }
    });
});

const myObserver = new IntersectionObserver(function (entradas) {
    entradas.forEach(function(e) {
        const idMenuControl = e.target.id;
        if (e.isIntersecting) {
            e.target.classList.add('show')
            if (idMenuControl === "aboltmeRef") {menuConfig(e.isIntersecting, idMenuControl)}

        } else {
            e.target.classList.remove('show')
            if (idMenuControl === "aboltmeRef") {menuConfig(e.isIntersecting, idMenuControl)}
        }
    })
});

const elem = document.querySelectorAll('.hidden');

elem.forEach( function (e) {
    myObserver.observe(e); 
})



let color = ['#e600ff', '#6557ff']

document.addEventListener('click', function (e) {
    const sideProjects = document.querySelectorAll('.sideProject');
    const root = document.documentElement;

    if (e.target.classList.contains('btProjects')) {
        const project = document.getElementById('Project');

        color.reverse()
        const novoGradiente = `linear-gradient(to left, ${color[0]}, ${color[1]})`;
        root.style.setProperty('--gradiente2Pronject', novoGradiente);

        if (e.target.getAttribute('mode') === "L") {
            
            sideProjects.forEach(function(elem) {
                elem.classList.add('animations')
            })
            
            project.classList.add('flipRanimationL');

        } else {
            sideProjects.forEach(function(elem) {
                elem.classList.add('animations')
            })
            project.classList.add('flipRanimationR');
        }
        
        
        project.addEventListener('animationend', function() {
            this.classList.remove('flipRanimationR');
            this.classList.remove('flipRanimationL');
            sideProjects.forEach(function(elem) {
                elem.classList.remove('animations')
            })
        }, { once: true });
    }
});

document.querySelector('.menuBt').addEventListener('click', function () {
    const menu = document.querySelector('.UlMenuConfigurator')
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
})

document.querySelector('.menuBack').addEventListener('click', function () {
    window.location.href = '#aboltmeRef';
})

function menuConfig(isOnDisplay) {
    if (isOnDisplay) {
        document.querySelector('.menu').style.display = 'flex'
        document.querySelector('.menuBack').style.display = 'none'
    } else {
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.menuBack').style.display = 'flex'
        document.querySelector('.UlMenuConfigurator').style.display = 'none'
    }
}

