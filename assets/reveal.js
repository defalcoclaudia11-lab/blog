/* Comparsa leggera degli elementi allo scorrimento.
   Unico script del sito: se JavaScript è disattivato, o se il sistema chiede
   "riduci movimento", tutto resta semplicemente visibile. */
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Elementi animati automaticamente + qualsiasi elemento con l'attributo data-reveal.
  var selector = '.entry, .about, .toc, .catalog-block, .pages, .prose > h2, .prose > blockquote, .download, .biblio, .finis, .site-footer, [data-reveal]';
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  document.querySelectorAll(selector).forEach(function (el) {
    // Gli elementi già visibili all'apertura non vengono nascosti.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.classList.add('reveal');
    observer.observe(el);
  });

})();
