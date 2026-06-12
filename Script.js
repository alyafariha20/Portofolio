/* ── MOBILE NAVIGATION ── */
function openMobileNav() {
  document.getElementById('mobile-nav').classList.add('open');
}
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
}

/* ── ACTIVE NAV ON SCROLL ── */
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', function () {
  var scrollY = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop    = section.offsetTop - 80;
    var sectionHeight = section.offsetHeight;
    var sectionId     = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });

  /* ── BACK TO TOP ── */
  var btn = document.getElementById('backToTop');
  if (scrollY > 400) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

/* ── SCROLL TO TOP ── */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}