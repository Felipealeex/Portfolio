document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});
document.querySelectorAll('.skill-bar').forEach(function (bar) {
    const skillLevel = bar.getAttribute('data-skill');
    bar.style.width = skillLevel + '%';
});
document.querySelectorAll('.filter-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(function (card) {
            card.style.display = filter === 'all' || card.getAttribute('data-category') === filter ? 'block' : 'none';
        });
    });
});
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        document.getElementById('form-feedback').textContent = 'Mensagem enviada com sucesso!';
        this.reset();
    } else {
        document.getElementById('form-feedback').textContent = 'Por favor, preencha todos os campos.';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '🌙'; 
    } else {
        themeIcon.textContent = '🌞'; 
    }

    themeToggle.addEventListener('click', () => {
        body.classList.add('fade-transition');
        setTimeout(() => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('dark-mode', 'enabled');
                themeIcon.textContent = '🌙'; 
            } else {
                localStorage.setItem('dark-mode', 'disabled');
                themeIcon.textContent = '🌞'; 
            }
            setTimeout(() => {
                body.classList.remove('fade-transition');
            }, 300);
        }, 250);
    });
});
function reveal() {
    const projectCards = document.querySelectorAll('.project-card');

    for (let i = 0; i < projectCards.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = projectCards[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            projectCards[i].classList.add('show');
        } else {
            projectCards[i].classList.remove('show');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal();

document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.skills, .contact, .projects');

        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150; 

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add("show");
            } else {
                revealElements[i].classList.remove("show");
            }
        }
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
document.getElementById('backToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

