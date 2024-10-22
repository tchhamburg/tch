require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener('turbolinks:load', () => {
    const slideshow = {
        currentSlide: 0,
        slides: null,

        init() {
            this.slides = document.querySelectorAll('.slide');
            if (this.slides.length === 0) {
                console.log('No slides found');
                return;
            }
            console.log(`Found ${this.slides.length} slides`);
            this.showSlide(0);
            this.startAutoPlay();
        },

        showSlide(index) {
            console.log(`Showing slide ${index}`);
            this.slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        },

        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.showSlide(this.currentSlide);
        },

        startAutoPlay() {
            setInterval(() => this.nextSlide(), 1000);
        }
    };

    slideshow.init();
});
