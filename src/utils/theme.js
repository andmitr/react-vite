const THEMES = ['light-mode', 'dark-mode'];

function readSavedTheme() {
  try {
    const savedTheme = localStorage.getItem('theme');
    return THEMES.includes(savedTheme) ? savedTheme : null;
  } catch {
    return null;
  }
}

function writeSavedTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Storage unavailable (private mode): keep theme for current session only.
  }
}

function getSystemTheme() {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode';
  } catch {
    return 'light-mode';
  }
}

function applyTheme(theme) {
  document.body.classList.remove('light-mode', 'dark-mode');
  document.body.classList.add(theme);
}

function initTheme() {
  const savedTheme = readSavedTheme();
  applyTheme(savedTheme || getSystemTheme());
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';

  applyTheme(newTheme);
  writeSavedTheme(newTheme);
}

export { initTheme, toggleTheme };