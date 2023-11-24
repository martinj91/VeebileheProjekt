const mobileBtn = document.getElementById('mobiil-cta')
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById('mobiil-välju');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-päis');
let logoSpan = document.querySelectorAll('.logo-intro');

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
                }, (idx + 1) * 2)
            })
        }, 1750);

        setTimeout(()=>{
            intro.style.top = '100vh';
        }, 2200)
    })
})