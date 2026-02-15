// for slideshow
    document.addEventListener("DOMContentLoaded", function() {
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        let slideIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.display = 'block';
                    indicators[i].classList.add('active');
                } else {
                    slide.style.display = 'none';
                    indicators[i].classList.remove('active');
                }
            });
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }

        function startSlideshow() {
            showSlide(slideIndex);
            setInterval(nextSlide, 5000); // Slide every 5 seconds
        }

        // Add click event listeners to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function () {
                slideIndex = index;
                showSlide(slideIndex);
            });
        });

        startSlideshow();
    });

    