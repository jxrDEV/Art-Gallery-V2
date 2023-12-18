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

const modal = document.querySelector('.modal');
const dialogElement = document.querySelector('dialog');

const artGallery = document.querySelectorAll('.art' );
let previewBox = document.querySelector('.preview-box');
let previewImg = previewBox.querySelector(".img-box img");
let previewTitle = previewBox.querySelector(".art-title p");


dialogElement.addEventListener('click', (event) => {
  if (event.target == dialogElement) {
    dialogElement.close();
  }
  function haveflow () {
    window.removeEventListener("wheel", preventDefault);
  }
  haveflow();
})

var preventDefault;
window.onload = () => {
  for (let i = 0; i < artGallery.length; i++) {
    artGallery[i].onclick = () => {
      function preview() {
        let selectedImgUrl = artGallery[i].querySelector('img').src;
        let selectedArtTitle = artGallery[i].getAttribute('data-title');

        previewImg.src = selectedImgUrl;
        previewTitle.innerText = selectedArtTitle;
        modal.showModal();
      }

      function noflow () {
        preventDefault = function (event) {
          event.preventDefault();
        }
        window.addEventListener("wheel", preventDefault, { passive: false });
      }
      
      preview();
      noflow();
    }
  }
}

let gabTitle = document.querySelector('.gab-title h1');
let titleText = gabTitle.textContent;

function createLetterElements() {
  gabTitle.innerHTML = '';
  for (let i = 0; i < titleText.length; i++) {
    let letter = document.createElement('span');
    letter.textContent = titleText[i];
    gabTitle.appendChild(letter);
  }
}

createLetterElements();
