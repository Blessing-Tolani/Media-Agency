var navSlide = function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navlinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", function () {
        nav.classList.toggle("nav-active");

        navlinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = "navLinkFade 0.5s ease forwards " + index / 7 + "s";
            }
        });

        burger.classList.toggle("newclass");
    });
};
navSlide();

gsap.from('.group', {
    opacity: 0,
    duration: 3,
    y: -5,
    stagger: 1
});