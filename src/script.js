const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});


const btnDoe = document.querySelector('.btn-doe');
const modalDoacao = document.getElementById('modal-doacao');
const modalFechar = document.getElementById('modal-fechar');

btnDoe.addEventListener('click', (e) => {
  e.preventDefault();
  modalDoacao.classList.add('open');
});

modalFechar.addEventListener('click', () => {
  modalDoacao.classList.remove('open');
});


modalDoacao.addEventListener('click', (e) => {
  if (e.target === modalDoacao) modalDoacao.classList.remove('open');
});


const animados = document.querySelectorAll(
  '.quem-somos, .projeto-card, .impacto-item, .voluntario, .hero-overlay h1, .hero-overlay .btn-primary'
);

animados.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
});

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 100); // leve delay entre cada elemento
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animados.forEach(el => scrollObserver.observe(el));