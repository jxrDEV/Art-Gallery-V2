const cursor = document.querySelector('.cursor');
const art = document.querySelectorAll('.container img');

art.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
  });

  image.addEventListener('mousemove', (e) => {
    cursor.classList.add('hovered');
  });

  image.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });
});

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY} = e;
  cursor.style.left = `${clientX}px`;
  cursor.style.top = `${clientY}px`;
});

document.addEventListener('scroll', () => {
  cursor.classList.remove('hovered');
});
