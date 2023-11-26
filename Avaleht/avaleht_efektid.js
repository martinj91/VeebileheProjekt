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

const vorm = document.querySelector('form');
const nimi =  document.getElementById('nimi');
const email = document.getElementById('email');
const telefon = document.getElementById('number');
const pealkiri = document.getElementById('teema');
const teade =  document.getElementById('sõnum');

function sendEmail() {
    const bodyMessage = `Nimi: ${nimi.value}<br> E-mail: ${email.value}<br>
    Telefon: ${telefon.value}<br> Sõnum: ${teade.value}`;

    Email.send({
        SecureToken: 'a270c788-ea75-48bf-b41c-08a6788cb77d',
        To : 'sandersirge@gmail.com',
        From : "projekt.kontaktivorm@gmail.com",
        Subject : pealkiri.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == 'OK') {
                Swal.fire({
                    title: "Saadetud!",
                    text: "Teie sõnum on kätte saadud!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const objektid = document.querySelectorAll('.objekt');

    for (const objekt of objektid) {
        if (objekt.value == '') {
            objekt.classList.add('error');
            objekt.parentElement.classList.add('error');
        }

        if (objektid[1].value != '') {
            checkEmail();
        }

        objektid[1].addEventListener('keyup', () => {
            checkEmail();
        });

        objekt.addEventListener('keyup', () => {
            if (objekt.value != '') {
                objekt.classList.remove('error');
                objekt.parentElement.classList.remove('error');
            }
            else {
                objekt.classList.add('error');
                objekt.parentElement.classList.add('error');
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector('.error-txt.email');

    if (!email.value.match(emailRegex)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if (email.value != '') {
            errorTxtEmail.innertext = '*Sisesta sobiv e-posti aadress';
        }
        else {
            errorTxtEmail.innertext = '*See on kohustuslik väli';
        }
    }
    else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

vorm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    if (!nimi.classList.contains('error') && !email.classList.contains('error') 
    && !telefon.classList.contains('error') && !pealkiri.classList.contains('error') 
    && !email.classList.contains('error')) {
        sendEmail();

        vorm.reset();
        return false;
    }
});