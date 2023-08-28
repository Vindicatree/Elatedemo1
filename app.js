let intro = document.querySelector('.intro');
let logo = document.querySelector('.title');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)
    })



})

const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
    rootMargin: "-500px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry=> {
        if (!entry.isIntersecting) {
            header.classList.add('nav_scrolled');
        } else {
            header.classList.remove("nav_scrolled");
        }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}