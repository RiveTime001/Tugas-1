// Saat klik nav link, tutup menu di mobile
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.getElementById('navbarNav');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).toggle();
        }
    });
});
