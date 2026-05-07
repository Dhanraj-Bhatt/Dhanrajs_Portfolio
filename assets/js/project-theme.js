(() => {
  const darkTheme = 'dark-theme';
  const clearTransitionState = () => {
    document.body.classList.remove('page-is-transitioning');
  };

  const applyTheme = (theme) => {
    if (!document.body) return;

    const isDark = theme === 'dark';
    document.body.classList.toggle(darkTheme, isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  };

  const syncSavedTheme = () => {
    applyTheme(localStorage.getItem('selected-theme'));
  };

  if (document.body) {
    syncSavedTheme();
    clearTransitionState();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      syncSavedTheme();
      clearTransitionState();
    }, { once: true });
  }

  window.addEventListener('pageshow', clearTransitionState);

  window.addEventListener('storage', (event) => {
    if (event.key === 'selected-theme') {
      applyTheme(event.newValue);
    }
  });

  const navigateWithTransition = (url) => {
    if (!url || document.body.classList.contains('page-is-transitioning')) return;

    document.body.classList.add('page-is-transitioning');
    window.setTimeout(() => {
      window.location.href = url;
    }, 180);
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');

    if (!link) return;
    if (link.hasAttribute('download')) return;
    if (link.target && link.target !== '_self') return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;

    event.preventDefault();
    navigateWithTransition(url.href);
  });
})();
