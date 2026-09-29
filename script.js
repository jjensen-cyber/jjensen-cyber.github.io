console.log("JavaScript is successfully linked!");

const toggleButton = document.getElementById('theme-toggle');

// Check the user's preferred theme (saved or system)
const savedTheme = localStorage.getItem('theme');
const systemPreferenceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Turns into preferred theme
if (savedTheme === 'dark' || (!savedTheme && systemPreferenceDark)) {
  document.body.classList.add('dark-theme');
  toggleButton.textContent = 'Light Mode';
} else {
  toggleButton.textContent = 'Dark Mode';
}

// Button function (switches theme)
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');

  // Updates button accordingly
  toggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';

  // Saves user preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
