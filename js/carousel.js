
  const slides = document.querySelectorAll(".slide");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;
  let slideInterval;

  //
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

  //
  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  // 
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  // 
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // 
  indicators.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      stopAutoSlide();  
      startAutoSlide(); 
    });
  });

  // 
  showSlide(currentIndex);
  startAutoSlide();
