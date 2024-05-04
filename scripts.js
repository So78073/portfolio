const myObserver = new IntersectionObserver(function (entradas) {
    entradas.forEach(function(e) {
        if (e.isIntersecting) {
            e.target.classList.add('show')
        } else {
            e.target.classList.remove('show')
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

function reverseColor() {
    
}
