//CARROUSEL - NOVEDADES //

const images = document.querySelector('.carousel-images');
        const leftButton = document.querySelector('.carousel-button.left');
        const rightButton = document.querySelector('.carousel-button.right');
        
        let index = 0;

        function updateCarousel() {
            images.style.transform = `translateX(-${index * 100}vmax)`;
        }
        function nextSlide() {
            index = (index === 2) ? 0 : index + 1;
            updateCarousel();
        }

        function previousSlide() {
            index = (index === 0) ? 2 : index - 1;
            updateCarousel();
        }

        // movimiento cada 3 segundos
        leftButton.addEventListener('click', previousSlide);
        rightButton.addEventListener('click', nextSlide);
        setInterval(nextSlide, 3000);

        