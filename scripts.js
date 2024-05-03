document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btProjects')) {
        const project = document.getElementById('Project');
        if (e.target.getAttribute('mode') === "L") {
            project.classList.add('flipRanimationL');
        } else {
            project.classList.add('flipRanimationR');
        }
        
        
        project.addEventListener('animationend', function() {
            this.classList.remove('flipRanimationR');
            this.classList.remove('flipRanimationL');
        }, { once: true });

    }
});
