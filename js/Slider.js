
// Slider properties
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides-2");
const dots = document.getElementsByClassName("dot");
const sliderContainer = document.getElementById("slider-container-2");

// Touch variables
let startX = 0;
let currentX = 0;
let isDragging = false;
let dragThreshold = 50; // Minimum distance to consider as a swipe

// Initialize
updateSlider();

// Function to update the slider display
function updateSlider() {
  // Move the slider container
  sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  
  // Update dot indicators
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex].classList.add("active");
}

// Function to show a specific slide
function currentSlide(index) {
  slideIndex = index;
  updateSlider();
}

// Touch event handlers
sliderContainer.addEventListener("touchstart", handleTouchStart, false);
sliderContainer.addEventListener("touchmove", handleTouchMove, false);
sliderContainer.addEventListener("touchend", handleTouchEnd, false);

// Mouse event handlers (for desktop testing)
sliderContainer.addEventListener("mousedown", handleMouseDown, false);
sliderContainer.addEventListener("mousemove", handleMouseMove, false);
sliderContainer.addEventListener("mouseup", handleMouseUp, false);
sliderContainer.addEventListener("mouseleave", handleMouseUp, false);

// Touch event functions
function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  isDragging = true;
  
  // Disable transition during dragging for more responsive feel
  sliderContainer.style.transition = "none";
}

function handleTouchMove(e) {
  if (!isDragging) return;
  
  currentX = e.touches[0].clientX;
  let diffX = currentX - startX;
  
  // Calculate how much to move (limited range to prevent dragging too far)
  let translateX = -slideIndex * 100 + (diffX / sliderContainer.offsetWidth * 100);
  
  // Resistance at the edges
  if (slideIndex === 0 && diffX > 0) {
    translateX = translateX * 0.3; // More resistance at start
  } else if (slideIndex === slides.length - 1 && diffX < 0) {
    translateX = -slideIndex * 100 + (diffX / sliderContainer.offsetWidth * 100) * 0.3; // More resistance at end
  }
  
  sliderContainer.style.transform = `translateX(${translateX}%)`;
}

function handleTouchEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  
  // Re-enable transition for smooth movement
  sliderContainer.style.transition = "transform 0.3s ease";
  
  // Calculate the distance swiped
  let diffX = currentX - startX;
  
  // Determine if swipe was significant enough to change slides
  if (Math.abs(diffX) > dragThreshold) {
    if (diffX > 0 && slideIndex > 0) {
      // Swiped right - go to previous slide
      slideIndex--;
    } else if (diffX < 0 && slideIndex < slides.length - 1) {
      // Swiped left - go to next slide
      slideIndex++;
    }
  }
  
  updateSlider();
}

// Mouse event functions (for desktop testing)
function handleMouseDown(e) {
  e.preventDefault();
  startX = e.clientX;
  isDragging = true;
  sliderContainer.style.transition = "none";
}

function handleMouseMove(e) {
  if (!isDragging) return;
  
  currentX = e.clientX;
  let diffX = currentX - startX;
  
  // Calculate how much to move (limited range to prevent dragging too far)
  let translateX = -slideIndex * 100 + (diffX / sliderContainer.offsetWidth * 100);
  
  // Resistance at the edges
  if (slideIndex === 0 && diffX > 0) {
    translateX = translateX * 0.3; // More resistance at start
  } else if (slideIndex === slides.length - 1 && diffX < 0) {
    translateX = -slideIndex * 100 + (diffX / sliderContainer.offsetWidth * 100) * 0.3; // More resistance at end
  }
  
  sliderContainer.style.transform = `translateX(${translateX}%)`;
}

function handleMouseUp(e) {
  if (!isDragging) return;
  isDragging = false;
  
  // Re-enable transition for smooth movement
  sliderContainer.style.transition = "transform 0.3s ease";
  
  // Calculate the distance swiped
  let diffX = currentX - startX;
  
  // Determine if swipe was significant enough to change slides
  if (Math.abs(diffX) > dragThreshold) {
    if (diffX > 0 && slideIndex > 0) {
      // Swiped right - go to previous slide
      slideIndex--;
    } else if (diffX < 0 && slideIndex < slides.length - 1) {
      // Swiped left - go to next slide
      slideIndex++;
    }
  }
  
  updateSlider();
}