document.querySelectorAll('[data-citation]').forEach(button => {
  const panel = document.getElementById(button.dataset.citation);
  if (!panel) return;
  button.hidden = false;
  button.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    button.setAttribute('aria-expanded', String(!panel.hidden));
  });
});
