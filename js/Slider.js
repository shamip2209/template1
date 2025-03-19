let slideIndex = 1;
let startX = 0;
let endX = 0;
const slider = document.getElementById("slider-container");

// Show first slide
showSlides(slideIndex);

// Touch start event
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

// Touch end event
slider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

// Mouse events for dragging (Desktop)
slider.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});
slider.addEventListener("mouseup", (e) => {
  endX = e.clientX;
  handleSwipe();
});

// Handle swipe gesture
function handleSwipe() {
  let diff = startX - endX;
  if (diff > 50) {
    plusSlides(1); // Swipe left (Next slide)
  } else if (diff < -50) {
    plusSlides(-1); // Swipe right (Previous slide)
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dot navigation
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show slides function
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
