//Nav Bar

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7}s`
            }
        })


        burger.classList.toggle("newclass");
    });

    
}
navSlide();

//Sticky Nav Bar
window.onscroll = function(){
    scrollFunction();
}
let scrollFunction = () => {
    if(document.documentElement.scrollTop > 250 ){
        document.querySelector('.header').style.position = "sticky";
        document.querySelector('.header').style.top = 0;
    }
    
}


document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration){
        let obj = document.body.querySelector(id),
        current = start,
        range = end-start,
        increment = end > start ? 1: -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current+=increment;
            obj.textContent = current + "+";
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("#count1", 0,1,300);
    counter("#count2", 100,50, 2500);
     counter("#count3", 0,100,3000);
})



