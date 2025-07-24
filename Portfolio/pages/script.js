const logo = document.getElementById('logo');
const loader = document.getElementById('loader');

// Step 1: Logo zoom animation runs automatically via CSS (3s)
// Step 2: After 3s, show loader with fade in
// Step 3: After 3s more, fade everything out and redirect

// After 3 seconds (logo zoom done)
setTimeout(() => {
  // Show loader
  loader.classList.add('active');
}, 3000);

// After 6 seconds total (logo + loader time)
setTimeout(() => {
  // Fade out logo and loader
  logo.classList.add('fade-out');
  loader.classList.add('fade-out');

  // After fade out (1s), redirect
  setTimeout(() => {
    window.location.href = 'profiles.html';
  }, 1000);
}, 6000);
