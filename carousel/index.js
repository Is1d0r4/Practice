const carousel = document.getElementById('carouselWrapper');
const dotsWrapper = document.getElementById('dotsWrapper');

let imgUrls = [];
let slides = [];
let slideIndex = 0;
let autoPlayInterval;

fetchData();

async function fetchData() {
  const endpoint = 'https://www.reddit.com/r/aww/top/.json?t=all';

  try {
    const response = await fetch(endpoint);
    const result = await response.json();
    processImageData(result);
  } catch (e) {
    console.log('error', e);
  }
}

function processImageData(data) {
  imgUrls = data.data.children
    .filter(img => img.data.url_overridden_by_dest.includes('jpg'))
    .map(img => img.data.url_overridden_by_dest);

  renderSlides();
}

function renderSlides() {
  imgUrls.forEach((url, index) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    slide.innerHTML = `<img src="${url}">`;
    carousel.appendChild(slide);
    createDot(index);
  });

  slides = document.querySelectorAll('.carousel-slide');
  slides[slideIndex].classList.add('active');
  autoPlay();
}

function createDot(index) {
  const dot = document.createElement('div');
  if (index === 0) dot.classList.add('active');
  dot.classList.add('dot');
  dot.setAttribute('data-index', index);
  dot.addEventListener('click', () => onDotClick(index, dot));
  dotsWrapper.appendChild(dot);
}

function onDotClick(index, dot) {
  resetAutoPlay();
  updateSlide(index);
  updateActiveDot(dot);
}

function updateSlide(newIndex) {
  slides[slideIndex].classList.remove('active');
  slideIndex = newIndex;
  slides[slideIndex].classList.add('active');
}

function updateActiveDot(activeDot) {
  document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
  activeDot.classList.add('active');
}

function prevSlide() {
  resetAutoPlay();
  updateSlide((slideIndex - 1 + slides.length) % slides.length);
  updateActiveDot(document.querySelectorAll('.dot')[slideIndex]);
}

function nextSlide() {
  resetAutoPlay();
  updateSlide((slideIndex + 1) % slides.length);
  updateActiveDot(document.querySelectorAll('.dot')[slideIndex]);
}

function autoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlay();
}