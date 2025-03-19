const texts = [
  "Selamat Datang User!",
  "tugas Agama Hindhu",
  "Tentang Awig Awig!",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typingText");
  const currentText = texts[textIndex];

  // Menetapkan tinggi minimum berdasarkan teks terpanjang
  typingElement.style.minHeight = "40px"; // Sesuaikan dengan tinggi teks maksimum

  if (isDeleting) {
    typingElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navLinks = document.getElementById('navLinks');


  hamburgerMenu.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    this.style 
  });
});


