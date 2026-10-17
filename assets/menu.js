// Menu latéral sur petit écran, commun à toutes les pages.
(() => {
  const corps = document.body;
  const ouvrir = document.getElementById('burger');
  const fermer = document.getElementById('drawer-close');
  const fond = document.getElementById('drawer-backdrop');
  const panneau = document.getElementById('drawer');
  if (!ouvrir || !panneau) return;

  const basculer = (ouvert) => {
    corps.classList.toggle('menu-ouvert', ouvert);
    ouvrir.setAttribute('aria-expanded', String(ouvert));
  };

  ouvrir.addEventListener('click', () => basculer(true));
  fermer.addEventListener('click', () => basculer(false));
  fond.addEventListener('click', () => basculer(false));
  panneau.querySelectorAll('a').forEach((lien) => lien.addEventListener('click', () => basculer(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') basculer(false); });
})();
