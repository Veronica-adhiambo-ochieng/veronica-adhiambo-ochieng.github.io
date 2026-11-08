// Highlights the section you're reading in the homepage's left-side menu.
(function () {
  const links = document.querySelectorAll('.home-nav a');
  if (!links.length || !('IntersectionObserver' in window)) return;

  const byId = {};
  links.forEach((link) => { byId[link.getAttribute('href').slice(1)] = link; });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.remove('active'));
      const link = byId[entry.target.id];
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  Object.keys(byId).forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
