const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => menu.classList.toggle('active'));
menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => menu.classList.remove('active'))
);

// Animação de entrada ao fazer scroll
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('show');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
} else {
    items.forEach(el => el.classList.add('show'));
}

document.getElementById('year').textContent = new Date().getFullYear();
