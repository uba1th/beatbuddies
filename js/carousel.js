
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;
  let slideInterval;

  // Show a specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      indicators[i].classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
        indicators[i].classList.add("active");
      }
    });
    currentIndex = index;
  }

  // Move to the next slide
  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Start auto-sliding
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  // Stop auto-sliding (if user interacts)
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Handle indicator click
  indicators.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoSlide();  // Optional: stop auto-slide on manual click
      startAutoSlide(); // Restart auto-slide
    });
  });

  // Initial setup
  showSlide(currentIndex);
  startAutoSlide();
