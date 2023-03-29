document.addEventListener('DOMContentLoaded', function () {
  const hoverImage = document.querySelector('.image-container .hoverImage');
  const cursorImage = document.querySelector('.image-container .cursorImage');

  hoverImage.addEventListener('mouseover', function () {
    cursorImage.style.display = 'block';
  });

  hoverImage.addEventListener('mouseout', function () {
    cursorImage.style.display = 'none';
  });

  document.addEventListener('mousemove', function (event) {
    const xPos = event.clientX + 10;
    const yPos = event.clientY + 10;

    cursorImage.style.left = xPos + 'px';
    cursorImage.style.top = yPos + 'px';
  });
});

document.querySelectorAll('img').forEach(function(img) {
  img.classList.add('hover-image');
});
