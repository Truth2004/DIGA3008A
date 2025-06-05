const overlay = document.getElementById('overlay');
const fullImage = document.getElementById('fullImage');
const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    fullImage.src = img.src;
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  fullImage.src = '';
});