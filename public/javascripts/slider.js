var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
       showSlides(slideIndex += 1);
}

function currentSlide(n) {
      showSlides(slideIndex = n);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

setInterval(plusSlide, 300000000, 1);

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("item-slider");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (slideIndex > slides.length) {
      slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
