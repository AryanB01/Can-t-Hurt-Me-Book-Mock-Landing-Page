const carouselExample = document.getElementById("carouselBookCover");

const carousel = new bootstrap.Carousel(carouselExample, {
  interval: 500,
  pause: true,
  keyboard: false,
  touch: true,
});
