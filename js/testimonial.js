
    const testimonialContainer = document.querySelector('.testimonial-container');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const cardWidth = 250; 

    nextButton.addEventListener('click', () => {
        // testimonialContainer.scrollLeft += cardWidth;
        // testimonialContainer.style.scrollBehavior = 'smooth';
        testimonialContainer.scrollBy({ left: +cardWidth, behavior: 'smooth' })

    });

    prevButton.addEventListener('click', () => {
        // testimonialContainer.scrollLeft -= cardWidth;
        // testimonialContainer.style.scrollBehavior = 'smooth';
        testimonialContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    });
    // trendingHolder.scrollBy({ left: -cardWidth, behavior: 'smooth' });
