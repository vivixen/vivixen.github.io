function smoothScroll(target) {
    const targetSection = document.querySelector(target);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
}

const scrollLinks = document.querySelectorAll('.nav a');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(link.getAttribute('href'));
    });
});