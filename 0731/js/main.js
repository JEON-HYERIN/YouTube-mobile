const moreBtn = document.querySelector('.youtube__title .btn');
const title = document.querySelector('.youtube__title .title');

moreBtn.addEventListener('click', function() {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});