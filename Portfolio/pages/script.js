const logo = document.getElementById('logo');
const loader = document.getElementById('loader');

setTimeout(() => {
  loader.classList.add('active');
}, 3000);

setTimeout(() => {
  // Fade out logo and loader
  logo.classList.add('fade-out');
  loader.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = 'profiles.html';
  }, 1000);
}, 6000);
