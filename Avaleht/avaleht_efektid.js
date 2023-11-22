const mobileBtn = document.getElementById('mobiil-cta');
    nav = document.querySelector('nav');
    mobileBtnExit = document.getElementById('mobiil-välju');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menüü-nupp');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menüü-nupp');
})